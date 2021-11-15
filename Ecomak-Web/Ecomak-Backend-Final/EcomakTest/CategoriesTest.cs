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
            var cat = await categoriesService.GetCategoryAsync(1, false);

            //result

            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task DeleteCategory_ShouldreturnTrue()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var res = await categoriesService.DeleteCategoryAsync(1);

            //result

            Assert.True(res);
        }
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat = await categoriesService.GetCategoriesAsync("id", false);

            Assert.IsAssignableFrom<IEnumerable<Category>>(cat);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat = categoriesService.GetCategoryAsync(19, false);

            await Assert.ThrowsAsync<NotFoundItemException>(() => cat);
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
                MoqlibraryRespository.Setup(m => m.DeleteCategoryAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat)); 
                MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(true));
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
