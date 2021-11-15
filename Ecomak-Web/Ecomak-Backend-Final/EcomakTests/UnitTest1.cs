using AutoMapper;
using Ecomak.Controllers;
using Ecomak.Data;
using Ecomak.Data.Entities;
using Ecomak.Data.Repository;
using Ecomak.Exceptions;
using Ecomak.Models;
using Ecomak.Services;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EcomakTests
{
    public class Tests
    {/*
        [SetUp]
        public void Setup()
        {
        }*/
        
        [Test]
        public void Test1()
        {/*
            var category = GetTestProduct();

            //act 
            CategoriesController Nose;*/
            //Assert.Pass(await EcomakRepository.GetCategoryAsync(1), category);
            Assert.AreEqual(1+1, 2);
            
        }
    
        [Test]
        public async Task GetCategory_ShouldreturnOneProduct()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoryAsync(1, false);
            


            Assert.IsInstanceOf<Category>(cat1);
            Assert.AreEqual(cat1.Id, 1);
            Assert.AreEqual(cat1.Name, "Cumpleaños");
        }
        [Test]
        public async Task GetCategory_ShouldreturnAnException()
        {
            var categoriesService = GetCategoriesService();
            //act 
            var cat1 = await categoriesService.GetCategoryAsync(69, false);


            Assert.ThrowsAsync<NotFoundItemException>(async () => await categoriesService.GetCategoryAsync(1, false));
            /*
            Assert.IsInstanceOf<Category>(cat1);
            Assert.AreEqual(cat1.Id, 1);
            Assert.AreEqual(cat1.Name, "Cumpleaños");*/
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