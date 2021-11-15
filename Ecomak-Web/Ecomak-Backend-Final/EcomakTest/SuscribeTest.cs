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
    public class SuscribeTest
    {
        
        [Fact]
        public async Task UpdateCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var categoriesService = GetSuscribeService();
            //Act 
            Subscribe catToAdd = new Subscribe { Id = 1, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 };
            var cat = await categoriesService.CreateSubscribeAsync(catToAdd);

            //Assert
            Assert.IsType<Subscribe>(cat);
            Assert.Equal(1, cat.Id);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnInvalidOperatorError()
        {
            //Arrange
            var categoriesService = GetSuscribeService(false);
            //Act 
            Subscribe catToAdd = new Subscribe();
            var cat = categoriesService.UpdateSubscribeAsync(19, catToAdd);

            //Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => cat);
        }
    

        [Fact]
        public async Task SuscribeCategory_ShouldreturnTrue()
        {
            var suscribeService = GetSuscribeService();
            //act 
            var res = await suscribeService.DeleteSubscribeAsync(1);

            //result

            Assert.True(res);
        }
        [Fact]
        public async Task GetSuscribe_ShouldReturnFirstSuscribe()
        {
            var suscribeService = GetSuscribeService();
            //act 
            var q1 = await suscribeService.GetSubscribeAsync(1);

            var q2 = new Subscribe { Id = 6, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 };

            Assert.NotStrictEqual(q1, q2);
        }
        [Fact]
        public async Task GetSuscribes_ShouldreturnAllSuscribes()
        {
            var SuscribesService = GetSuscribeService();
            //act 
            var suscribe = await SuscribesService.GetSubscribesAsync("id");

            Assert.IsAssignableFrom<IEnumerable<Subscribe>>(suscribe);
           
        }
        [Fact]
        public async Task GetSuscribes_ShouldreturnAnException()
        {
            var SuscribesService = GetSuscribeService();
            //act 
            var cat1 = SuscribesService.GetSubscribeAsync(19);

            await Assert.ThrowsAsync<NotFoundItemException>(() => cat1);
        }
        private SubscribesService GetSuscribeService(bool suscribeSaved = true)
        {

            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testSuscribe = new List<SubscribeEntity>();
            testSuscribe.Add(new SubscribeEntity { Id = 1, Company="Cococola", Email="email@g.com", Message="good", Name="Andres", Phone= 7979797});
            testSuscribe.Add(new SubscribeEntity { Id = 2, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 });
            testSuscribe.Add(new SubscribeEntity { Id = 3, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 });
            testSuscribe.Add(new SubscribeEntity { Id = 4, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 });
            testSuscribe.Add(new SubscribeEntity { Id = 5, Company = "Cococola", Email = "email@g.com", Message = "good", Name = "Andres", Phone = 7979797 });
            IEnumerable<SubscribeEntity> testSuscribeIE = testSuscribe;
            foreach (SubscribeEntity cat in testSuscribeIE)
            {
                MoqlibraryRespository.Setup(m => m.GetSubscribeAsync(cat.Id)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteSubscribeAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
                MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(true));
            }

            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(suscribeSaved));
            MoqlibraryRespository.Setup(m => m.GetSubscribesAsync("id")).Returns(Task.FromResult(testSuscribeIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            SubscribesService suscribesService = new SubscribesService(MoqlibraryRespository.Object, mapper);

            return suscribesService;


        }
    }
}
