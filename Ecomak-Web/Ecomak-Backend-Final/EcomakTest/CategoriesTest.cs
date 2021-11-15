using AutoMapper;
using Ecomak.Data;
using Ecomak.Data.Entities;
using Ecomak.Data.Repository;
using Ecomak.Exceptions;
using Ecomak.Models;
using Ecomak.Services;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace EcomakTest
{
    public class CategoriesTest
    {
        [Fact]
        public async Task GetCategory_ShouldReturnFirstCategory()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoryAsync(1, false);
            IEnumerable<Product> p = new List<Product>();
            IEnumerable<Tr> t = new List<Tr>();

            var cat2 = new Category { Id = 1, Name = "Cumpleaños", CantProducts = 0, CantTrs = 0 , products = p, trs = t};

            Assert.NotStrictEqual(cat1, cat2);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnSecondCategory()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoryAsync(2, false);
            IEnumerable<Product> p = new List<Product>();
            IEnumerable<Tr> t = new List<Tr>();

            var cat2 = new Category { Id = 2, Name = "Comida", CantProducts = 0, CantTrs = 0, products = p, trs = t };

            Assert.NotStrictEqual(cat1, cat2);
        }
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoriesAsync("id", false);

            Assert.IsAssignableFrom<IEnumerable<Category>>(cat1);
            //Assert.NotStrictEqual(cat1, cat2);
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
            var testCategories = new List<CategoryEntity>();
            testCategories.Add(new CategoryEntity { Id = 1, Name = "Cumpleaños" });
            testCategories.Add(new CategoryEntity { Id = 2, Name = "Comida" });
            testCategories.Add(new CategoryEntity { Id = 3, Name = "Bebidas" });
            testCategories.Add(new CategoryEntity { Id = 4, Name = "Organicos" });
            IEnumerable<CategoryEntity> testCategoriesIE = testCategories;
            foreach(CategoryEntity cat in testCategoriesIE)
            {
                MoqlibraryRespository.Setup(m => m.GetCategoryAsync(cat.Id, false)).Returns(Task.FromResult(cat));
            }

            MoqlibraryRespository.Setup(m => m.GetCategories("id", false)).Returns(Task.FromResult(testCategoriesIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            CategoriesService categoriesService = new CategoriesService(MoqlibraryRespository.Object, mapper);

            return categoriesService;


        }
    }
}
