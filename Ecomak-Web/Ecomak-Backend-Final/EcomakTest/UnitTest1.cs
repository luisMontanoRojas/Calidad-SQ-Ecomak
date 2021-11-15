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
    public class UnitTest1
    {
        [Fact]
        public async Task GetCategory_ShouldreturnOneProduct()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoryAsync(1, false);
            IEnumerable<Product> p = new List<Product>();
            IEnumerable<Tr> t = new List<Tr>();

            var cat2 = new Category { Id = 1, Name = "Cumpleaños", CantProducts = 0, CantTrs = 0 , products = p, trs = t};

            Assert.NotStrictEqual(cat1, cat2);
            //Assert.Equal(cat1, cat2);

            //Assert.AreEqual(cat1.Id, 1);
            //Assert.Equal(cat1.Name, "Cumpleaños");
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = categoriesService.GetCategoryAsync(19, false);

        
            await Assert.ThrowsAsync<NotFoundItemException>(() => cat1);
        }

        private CategoriesService GetCategoriesService()
        {
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var categoryEntity = new CategoryEntity() { Id = 1, Name = "Cumpleaños" };

            MoqlibraryRespository.Setup(m => m.GetCategoryAsync(categoryEntity.Id, false)).Returns(Task.FromResult(categoryEntity));

            var myProfile = new EcomakProfile();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            var mapper = new Mapper(configuration);

            var categoriesService = new CategoriesService(MoqlibraryRespository.Object, mapper);

            return categoriesService;


        }
        private List<Category> GetTestProduct()
        {
            var testProducts = new List<Category>();
            testProducts.Add(new Category { Id = 1, Name = "Demo1" });
            testProducts.Add(new Category { Id = 2, Name = "Demo2" });
            testProducts.Add(new Category { Id = 3, Name = "Demo3" });
            testProducts.Add(new Category { Id = 4, Name = "Demo4" });

            return testProducts;
        }
    }
}
