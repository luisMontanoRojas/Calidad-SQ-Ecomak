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
    public class CategoriesTrTest
    {
        [Fact]
        public async Task GetCategory_ShouldReturnFirstCategory()
        {
            //Arrange
            var categoriesTrService = GetCategoriesTrService();
            //Act 
            var cat = await categoriesTrService.GetCategoryTrAsync(1, false);
            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            //Arrange
            var categoriesTrService = GetCategoriesTrService();
            //Act 
            var cat = categoriesTrService.GetCategoryTrAsync(19, false);
            //Assert
            await Assert.ThrowsAsync<NotFoundItemException>(() => cat);
        }
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            //Arrange
            var categoriesTrService = GetCategoriesTrService();
            //Act 
            var cat = await categoriesTrService.GetCategoriesTrAsync("id", false);
            //Assert
            Assert.IsAssignableFrom<IEnumerable<Category>>(cat);
        }
        [Fact]
        public async Task AddCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService();
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños" };
            var cat = await categoriesService.AddCategoryTrAsync(catToAdd);

            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task AddCategoryAsync_ShouldthrowAneror()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService(false);
            //Act 
            Category catToAdd = new Category();
            var cat = categoriesService.AddCategoryTrAsync(catToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService();
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños" };
            var cat = await categoriesService.AddCategoryTrAsync(catToAdd);

            //Assert
            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnInvalidOperatorError()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService(false);
            //Act 
            Category catToAdd = new Category();
            var cat = categoriesService.UpdateCategoryTrAsync(19, catToAdd);

            //Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => cat);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnError()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService(false);
            //Act 
            Category catToAdd = new Category { Id = 1, Name = "Cumpleaños" };
            var cat = categoriesService.UpdateCategoryTrAsync(1, catToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }

        [Fact]
        public async Task DeleteCategory_ShouldreturnTrue()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService();
            //Act 
            var res = await categoriesService.DeleteCategoryTrAsync(1);
            //Assert
            Assert.True(res);
        }
        [Fact]
        public async Task DeleteCategory_ShouldreturnFalse()
        {
            //Arrange
            var categoriesService = GetCategoriesTrService();
            //Act
            var res = categoriesService.DeleteCategoryTrAsync(19);
            //Assert
            await Assert.ThrowsAsync<NotFoundItemException>(() => res);
        }

        private CategoriesTrService GetCategoriesTrService(bool categorySaved = true)
        {
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testCategories = new List<CategoryEntity>();
            testCategories.Add(new CategoryEntity { Id = 1, Name = "Cumpleaños" });
            testCategories.Add(new CategoryEntity { Id = 2, Name = "Comida" });
            testCategories.Add(new CategoryEntity { Id = 3, Name = "Bebidas" });
            testCategories.Add(new CategoryEntity { Id = 4, Name = "Organicos" });
            IEnumerable<CategoryEntity> testCategoriesIE = testCategories;
            foreach (CategoryEntity cat in testCategoriesIE)
            {
                MoqlibraryRespository.Setup(m => m.UpdateCategoryTr(cat));
                MoqlibraryRespository.Setup(m => m.CreateCategoryTr(cat));
                MoqlibraryRespository.Setup(m => m.GetCategoryTrAsync(cat.Id, false)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteCategoryTrAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
            }

            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(categorySaved));
            MoqlibraryRespository.Setup(m => m.GetCategoriesTr("id", false)).Returns(Task.FromResult(testCategoriesIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            CategoriesTrService categoriesTrService = new CategoriesTrService(MoqlibraryRespository.Object, mapper);

            return categoriesTrService;


        }
    }
}
