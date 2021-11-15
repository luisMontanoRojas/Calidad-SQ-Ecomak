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
    public class QuotesTest
    {
        [Fact]
        public async Task DeleteQuotes_ShouldreturnTrue()
        {
            var quotesService = GetQuotesService();
            //act 
            var res = await quotesService.DeleteQuoteAsync(1);

            //result

            Assert.True(res);
        }
        [Fact]
        public async Task DeleteQuotes_ShouldreturnFalse()
        {
            var quotesService = GetQuotesService(false);
            //act 
            var res = await quotesService.DeleteQuoteAsync(1);

            //result

            Assert.False(res);
        }
        [Fact]
        public async Task GetQuotes_ShouldReturnFirstQuotes()
        {
            var quotesService = GetQuotesService();
            //act 
            var q1 = await quotesService.GetQuoteAsync(1);
            IEnumerable<Quote> p = new List<Quote>();

            var q2 = new Quote { Id = 4, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa" };

            Assert.NotStrictEqual(q1, q2);
        }
        [Fact]
        public async Task GetQuotes_ShouldreturnAllQuotes()
        {
            var productService = GetQuotesService();
            //act 
            var quote = await productService.GetQuotesAsync();

            Assert.IsAssignableFrom<IEnumerable<Quote>>(quote);
            //Assert.NotStrictEqual(cat1, cat2);
        }
        [Fact]
        public async Task GetQuotes_ShouldreturnAnException()
        {
            var quotesService = GetQuotesService();
            //act 
            var cat1 = quotesService.GetQuoteAsync(19);

            await Assert.ThrowsAsync<NotFoundItemException>(() => cat1);
        }





        [Fact]
        public async Task CreateQuoteAsync_ShouldCreateaCategory()
        {
            //Arrange
            var quotesService = GetQuotesService();
            //Act 
            Quote catToAdd = new Quote { Id = 1, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa", ProductId = 1};
            var cat = await quotesService.CreateQuote(catToAdd);

            //Assert
            Assert.IsType<Quote>(cat);
            Assert.Equal(1, cat.Id);
            Assert.Equal("abc", cat.imagePath);
        }  
        [Fact]
        public async Task UpdateQuoteAsync_ShouldthrowAnError()
        {
            //Arrange
            var quotesService = GetQuotesService(false);
            //Act 
            Quote catToAdd = new Quote { Id = 1, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa" };
            var cat = quotesService.UpdateQuoteAsync(1, catToAdd);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => cat);
        }

        private QuotesService GetQuotesService(bool quoteSaved = true)
        {
          
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testQuotes = new List<QuoteEntity>();
            testQuotes.Add(new QuoteEntity { Id = 1, imagePath ="abc", messageSub ="cdf", QuoteColor="azul", Quantity = 1, emailSub="a@a.com", nameSub="name", phonoSub="asd", enterpriseSub="empresa" });
            testQuotes.Add(new QuoteEntity { Id = 2, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa" });
            testQuotes.Add(new QuoteEntity { Id = 3, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa" });
            testQuotes.Add(new QuoteEntity { Id = 4, imagePath = "abc", messageSub = "cdf", QuoteColor = "azul", Quantity = 1, emailSub = "a@a.com", nameSub = "name", phonoSub = "asd", enterpriseSub = "empresa" });

            IEnumerable<QuoteEntity> testQuoteIE = testQuotes;
            foreach (QuoteEntity cat in testQuoteIE)
            {
                MoqlibraryRespository.Setup(m => m.UpdateQuote(cat));
                MoqlibraryRespository.Setup(m => m.CreateQuote(cat));
                MoqlibraryRespository.Setup(m => m.GetQuoteAsync(cat.Id)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteQuoteAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
                
            }
            MoqlibraryRespository.Setup(m => m.GetProductAsync(1)).Returns(Task.FromResult(new ProductEntity{ Id = 1, Photo = "aweqw"}));

            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(quoteSaved));

            MoqlibraryRespository.Setup(m => m.GetQuotesAsync("id")).Returns(Task.FromResult(testQuoteIE));
            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            QuotesService quotesService = new QuotesService(MoqlibraryRespository.Object, mapper);

            return quotesService;


        }
    }
}
