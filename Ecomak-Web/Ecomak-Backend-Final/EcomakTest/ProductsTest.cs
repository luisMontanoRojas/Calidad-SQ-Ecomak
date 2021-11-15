using AutoMapper;
using Ecomak.Data;
using Ecomak.Data.Entities;
using Ecomak.Data.Repository;
using Ecomak.Exceptions;
using Ecomak.Models;
using Ecomak.Services;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace EcomakTest
{
    public class ProductsTest
    {
        
        [Fact]
        public async Task GetProduct_ShouldreturnAnException()
        {
            var productsService = GetproductsService();
            //act 
            var prod = productsService.GetProductAsync(20, 1);


            await Assert.ThrowsAsync<NotFoundItemException>(() => prod);
        }

        [Fact]
        public async Task GetProduct_ShouldreturnOneProduct()
        {
            var productsService = GetproductsService();
            //act 
            var product1 = await productsService.GetProductAsync(1, 1);
            IEnumerable<Quote> Q = new List<Quote>();
            var product2 = new Product { Id = 1, Design = "algodon", Fabric = "bolivia", Handle = "a mano", Photo = "abc", Quantity = "3", Size = "mediano", Type = "bolso", CategoryId = 1,quotes = Q  };

            Assert.NotStrictEqual(product1, product2);
        }
        [Fact]
        public async Task GetProducts_ShouldreturnAllPromotions()
        {
            var productService = GetproductsService();
            //act 
            var product = await productService.GetProductsAsync(1);

            Assert.IsAssignableFrom<IEnumerable<Product>>(product);
            //Assert.NotStrictEqual(cat1, cat2);
        }

        private ProductsService GetproductsService()
        {
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testProducts = new List<ProductEntity>();
            CategoryEntity C = new CategoryEntity() { Id = 1 , Name ="cumpleaños"} ;
            testProducts.Add(new ProductEntity { Id = 1, Design = "algodon", Fabric = "bolivia", Handle = "a mano", Photo = "abc", Quantity = "3", Size = "mediano", Type = "bolso" , Category = C});
            testProducts.Add(new ProductEntity { Id = 2, Design = "algodon", Fabric = "chile", Handle = "a maquina", Photo = "abc", Quantity = "3", Size = "mediano", Type = "bolso", Category = C });
            testProducts.Add(new ProductEntity { Id = 3, Design = "poliester", Fabric = "bolivia", Handle = "a mano", Photo = "abc", Quantity = "5", Size = "mediano", Type = "bolso", Category = C });
            testProducts.Add(new ProductEntity { Id = 4, Design = "algodon", Fabric = "peru", Handle = "a mano", Photo = "abc", Quantity = "3", Size = "mediano", Type = "bolso", Category = C });
            IEnumerable<ProductEntity> testProductsIE = testProducts;
            foreach (ProductEntity cat in testProductsIE)
            {
                MoqlibraryRespository.Setup(m => m.GetProductAsync(cat.Id)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.GetCategories("id", false));
                MoqlibraryRespository.Setup(m => m.DeleteProductAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
                MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(true));
            }

            MoqlibraryRespository.Setup(m => m.GetProductsAsync(1)).Returns(Task.FromResult(testProductsIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            ProductsService categoriesTrService = new ProductsService(MoqlibraryRespository.Object, mapper);

            return categoriesTrService;


        }
    }
}
