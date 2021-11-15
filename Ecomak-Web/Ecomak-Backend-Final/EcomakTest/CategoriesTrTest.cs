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
    public class CategoriesTrTest
    {
        [Fact]
        public async Task GetCategory_ShouldReturnFirstCategory()
        {
            var categoriesTrService = GetCategoriesService();
            //act 
            var cat = await categoriesTrService.GetCategoryTrAsync(1, false);
            IEnumerable<Product> p = new List<Product>();
            IEnumerable<Tr> t = new List<Tr>();

            //result

            Assert.IsType<Category>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("Cumpleaños", cat.Name);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnSecondCategory()
        {
            var categoriesTrService = GetCategoriesService();
            //act 
            Category cat = await categoriesTrService.GetCategoryTrAsync(2, false);
            IEnumerable<Product> p = new List<Product>();
            IEnumerable<Tr> t = new List<Tr>();

            //result

            Assert.IsType<Category>(cat);
            Assert.Equal(2, cat.Id);
            Assert.Equal("Comida" , cat.Name);
            
        }
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            var categoriesTrService = GetCategoriesService();
            //act 
            var cat = await categoriesTrService.GetCategoriesTrAsync("id", false);

            Assert.IsAssignableFrom<IEnumerable<Category>>(cat);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            var categoriesTrService = GetCategoriesService();
            //act 
            var cat = categoriesTrService.GetCategoryTrAsync(19, false);

            await Assert.ThrowsAsync<NotFoundItemException>(() => cat);
        }

        private CategoriesTrService GetCategoriesService()
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
                MoqlibraryRespository.Setup(m => m.GetCategoryTrAsync(cat.Id, false)).Returns(Task.FromResult(cat));
            }

            MoqlibraryRespository.Setup(m => m.GetCategoriesTr("id", false)).Returns(Task.FromResult(testCategoriesIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            CategoriesTrService categoriesTrService = new CategoriesTrService(MoqlibraryRespository.Object, mapper);

            return categoriesTrService;


        }
    }
}
