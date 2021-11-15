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
    public class CategoriesTest
    {
        [Fact]
        public async Task GetCategory_ShouldReturnFirstCategory()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            var cat = await categoriesService.GetCategoryAsync(1, false);
            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            var cat = categoriesService.GetCategoryAsync(19, false);
            //Assert
            await Assert.ThrowsAsync<NotFoundItemException>(() => cat);
        }
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            var cat = await categoriesService.GetCategoriesAsync("id", false);
            //Assert
            Assert.IsAssignableFrom<IEnumerable<Category>>(cat);
        }
        [Fact]
        public async Task AddCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños" };
            var cat = await categoriesService.AddCategoryAsync(catToAdd);

            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task AddCategoryAsync_ShouldthrowAneror()
        {
            //Arrange
            var categoriesService = GetCategoriesService(false);
            //Act 
            Category catToAdd = new Category();
            var cat = categoriesService.AddCategoryAsync(catToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños" };
            var cat = await categoriesService.AddCategoryAsync(catToAdd);

            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnInvalidOperatorError()
        {
            //Arrange
            var categoriesService = GetCategoriesService(false);
            //Act 
            Category catToAdd = new Category();
            var cat = categoriesService.UpdateCategoryAsync(19, catToAdd);

            //Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => cat);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnError()
        {
            //Arrange
            var categoriesService = GetCategoriesService(false);
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños"};
            var cat = categoriesService.UpdateCategoryAsync(1, catToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }

        [Fact]
        public async Task DeleteCategory_ShouldreturnTrue()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act 
            var res = await categoriesService.DeleteCategoryAsync(1);
            //Assert
            Assert.True(res);
        }
        [Fact]
        public async Task DeleteCategory_ShouldreturnFalse()
        {
            //Arrange
            var categoriesService = GetCategoriesService();
            //Act
            var res = categoriesService.DeleteCategoryAsync(19);
            //Assert
            await Assert.ThrowsAsync<NotFoundItemException>(() => res);
        }

        private CategoriesService GetCategoriesService(bool categorySaved = true)
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
                MoqlibraryRespository.Setup(m => m.UpdateCategory(cat));
                MoqlibraryRespository.Setup(m => m.CreateCategory(cat));
                MoqlibraryRespository.Setup(m => m.GetCategoryAsync(cat.Id, false)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteCategoryAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat)); 
            }
            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(categorySaved));
            MoqlibraryRespository.Setup(m => m.GetCategories("id", false)).Returns(Task.FromResult(testCategoriesIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            CategoriesService categoriesService = new CategoriesService(MoqlibraryRespository.Object, mapper);

            return categoriesService;


        }
    }
}
