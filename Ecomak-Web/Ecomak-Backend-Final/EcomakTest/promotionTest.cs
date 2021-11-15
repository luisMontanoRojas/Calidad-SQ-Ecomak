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
    public class promotionTest
    {
        [Fact]
        public async Task AddpromotionAsync_ShouldCreateaCategory()
        {
            //Arrange
            var promotionService = GetpromotionService();
            //Act 
            var date1 = new DateTime();
            var date2 = new DateTime();
            Promotion promToAdd = new Promotion { id = 1, description = "grande", endDate = date1, iniDate = date2, image = "aasss", tittle = "objeto" };
            var cat = await promotionService.CreatePromotionAsync(promToAdd);

            //Assert
            Assert.IsType<Promotion>(cat);
            Assert.Equal(1, cat.id);
            Assert.Equal("grande", cat.description);
        }
        [Fact]
        public async Task AddPromotionAsync_ShouldthrowAneror()
        {
            //Arrange
            var promotionService = GetpromotionService(false);
            //Act 
            Promotion promToAdd = new Promotion();
            var cat = promotionService.CreatePromotionAsync(promToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }
        [Fact]
        public async Task UpdatePromotionAsync_ShouldCreateaCategory()
        {
            //Arrange
            var promotionService = GetpromotionService();
            //Act 
            var date1 = new DateTime();
            var date2 = new DateTime();
            Promotion promToAdd = new Promotion { id = 1, description = "grande", endDate = date1, iniDate = date2, image = "aasss", tittle = "objeto" };
            var cat = await promotionService.CreatePromotionAsync(promToAdd);

            //Assert
            Assert.IsType<Promotion>(cat);
            Assert.Equal(1, cat.id);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnInvalidOperatorError()
        {
            //Arrange
            var promotionService = GetpromotionService(false);
            //Act 
            Promotion catToAdd = new Promotion();
            var cat = promotionService.UpdatePromotionAsync(19, catToAdd);

            //Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => cat);
        }
        [Fact]
        public async Task UpdatePromotionAsync_ShouldthrowAnError()
        {
            //Arrange
            var categoriesService = GetpromotionService(false);
            //Act 
            var date1 = new DateTime();
            var date2 = new DateTime();
            Promotion proToAdd = new Promotion { id = 1, description = "grande", endDate = date1, iniDate = date2, image = "aasss", tittle = "objeto" };
            var cat = categoriesService.UpdatePromotionAsync(1, proToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }
        [Fact]
        public async Task DeletePromotion_ShouldreturnTrue()
        {
            var promotionService = GetpromotionService();
            //act 
            var res = await promotionService.DeletePromotionAsync(1);

            //result

            Assert.True(res);
        }
        [Fact]
        public async Task GetPromotion_ShouldreturnAnException()
        {
            var PromotionsService = GetpromotionService();
            //act 
            var promotion1 = PromotionsService.GetPromotionAsync(10, false);
            await Assert.ThrowsAsync<NotFoundItemException>(() => promotion1);
        }
        [Fact]
        public async Task GetPromotion_ShouldreturnOnePromotion()
        {
            var promotionService = GetpromotionService();
            //act 
            var date1 = new DateTime();
            var date2 = new DateTime();
            var promotion1 = await promotionService.GetPromotionAsync(1, false);
            IEnumerable<Quote> Q = new List<Quote>();
            var promotion2 = new Promotion { id = 1, description = "grande", endDate = date1, iniDate = date2, image = "aasss", tittle = "objecto" };

            Assert.NotStrictEqual(promotion1, promotion2);
        }
        [Fact]
        public async Task GetPromotions_ShouldreturnAllPromotions()
        {
            var promotionService = GetpromotionService();
            //act 
            var prom1 = await promotionService.GetPromotionsAsync(false, "id");

            Assert.IsAssignableFrom<IEnumerable<Promotion>>(prom1);
            //Assert.NotStrictEqual(cat1, cat2);
        }
        private PromotionsService GetpromotionService(bool promotionSaved = true)
        {
            var date1 = new DateTime();
            var date2 = new DateTime();
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testPromotions = new List<PromotionEntity>();
            testPromotions.Add(new PromotionEntity { id = 1, description = "grande", endDate = date1, iniDate = date2, image = "aasss", tittle = "objeto" });
            testPromotions.Add(new PromotionEntity { id = 2, description = "pequeño", endDate = date1, iniDate = date2, image = "aaddss", tittle = "bolsa" });
            testPromotions.Add(new PromotionEntity { id = 3, description = "enorme", endDate = date1, iniDate = date2, image = "adfgh", tittle = "envoltura" });
            testPromotions.Add(new PromotionEntity { id = 4, description = "grande", endDate = date1, iniDate = date2, image = "foto", tittle = "regalo" });
            IEnumerable<PromotionEntity> testPromotionIE = testPromotions;
            foreach (PromotionEntity cat in testPromotionIE)
            {
                MoqlibraryRespository.Setup(m => m.GetPromotionAsync(cat.id, false)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeletePromotionAsync(cat.id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
                MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(true));
            }

            MoqlibraryRespository.Setup(m => m.GetPromotionsAsync( false, "id")).Returns(Task.FromResult(testPromotionIE));
            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(promotionSaved));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            PromotionsService promotionsService = new PromotionsService(MoqlibraryRespository.Object, mapper);

            return promotionsService;


        }
    }
}
