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
    public class TrTest
    {
        
        [Fact]
        public async Task GetTr_ShouldReturnFirstQuotes()
        {
            var trService = GetTrService();
            //act 
            var q1 = await trService.GetTrByIdTr(1);
            IEnumerable<Tr> p = new List<Tr>();

            var q2 = new Tr { IdTr = 4, DesignTr = "good", FabricTr = "peru", HandleTr = "abc", SizeTr = "big", QuantityTr = "one", PhotoTr = "abc.png", TypeTr = "bca" };

            Assert.NotStrictEqual(q1, q2);
        }
        [Fact]
        public async Task GetSuscribes_ShouldreturnAllSuscribes()
        {
            var trService = GetTrService();
            //act 
            var suscribe = await trService.GetTrsAsync(1);

            Assert.IsAssignableFrom<IEnumerable<Tr>>(suscribe);

        }
        [Fact]
        public async Task GetQuotes_ShouldreturnAnException()
        {
            var TrService = GetTrService();
            //act 
            var tr = TrService.GetTrAsync(19,1);

            await Assert.ThrowsAsync<NotFoundItemException>(() => tr);
        }
        private TrsService GetTrService()
        {

            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testTr = new List<TrEntity>();
            testTr.Add(new TrEntity {IdTr = 1, DesignTr ="good", FabricTr="peru", HandleTr= "abc", SizeTr="big", QuantityTr= "one", PhotoTr= "abc.png", TypeTr="bca" });
            testTr.Add(new TrEntity { IdTr = 2, DesignTr = "good", FabricTr = "peru", HandleTr = "abc", SizeTr = "big", QuantityTr = "one", PhotoTr = "abc.png", TypeTr = "bca" });
            testTr.Add(new TrEntity { IdTr = 3, DesignTr = "good", FabricTr = "peru", HandleTr = "abc", SizeTr = "big", QuantityTr = "one", PhotoTr = "abc.png", TypeTr = "bca" });
            testTr.Add(new TrEntity { IdTr = 4, DesignTr = "good", FabricTr = "peru", HandleTr = "abc", SizeTr = "big", QuantityTr = "one", PhotoTr = "abc.png", TypeTr = "bca" });

            IEnumerable<TrEntity> testTrIE = testTr;
            foreach (TrEntity cat in testTrIE)
            {
                MoqlibraryRespository.Setup(m => m.GetTrAsync(cat.IdTr)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteTrAsync(cat.IdTr));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
                MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(true));
            }


            MoqlibraryRespository.Setup(m => m.GetTrsAsync(1)).Returns(Task.FromResult(testTrIE));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            TrsService trService = new TrsService(MoqlibraryRespository.Object, mapper);

            return trService;


        }
    }
}
