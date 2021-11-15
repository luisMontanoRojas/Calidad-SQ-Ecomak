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
    public class ImagesTest
    {
        [Fact]
        public async Task ImagesDelete_ShouldreturnTrue()
        {
            var ImagesService = GetImageService();
            //act 
            var res = await ImagesService.DeleteImageAsync(1);

            //result

            Assert.True(res);
        }

        [Fact]
        public async Task ImagesDelete_ShouldReturnFalse()
        {
            var ImagesService = GetImageService(false);
            //act 
            var res = await ImagesService.DeleteImageAsync(1);

            //result

            Assert.False(res);
        }
        [Fact]
        public async Task GetImages_ShouldReturnFirstImages()
        {
            var ImagesService = GetImageService();
            //act 
            var q1 = await ImagesService.GetImageAsyncByIdImage(1);

            var q2 = new Image {  Id = 4, Name = "FotoNaranja", Origin = "peru", Type = "grande" };

            Assert.NotStrictEqual(q1, q2);
        }
    
        [Fact]
        public async Task GetImages_ShouldreturnAnException()
        {
            var ImagesService = GetImageService();
            //act 
            var cat1 = ImagesService.GetImageAsyncByIdImage(19);

            await Assert.ThrowsAsync<NotFoundItemException>(() => cat1);
        }

        //  -   -   -   -   -   -   -   -   -   -   -    -

        [Fact]
        public async Task CreateImage_ShouldCreateaCategory()
        {
            //Arrange
            var ImagesService = GetImageService();
            //Act 
            Image imToCreate = new Image { Id = 1, Name = "fotoAzul", Origin = "peru", Type = "grande" };
            var ima = await ImagesService.CreateImage(imToCreate);

            //Assert
            Assert.IsType<Image>(ima);
            Assert.Equal(1, ima.Id);
            Assert.Equal("fotoAzul", ima.Name);
        }
        [Fact]
        public async Task AddCategoryAsync_ShouldthrowAneror()
        {
            //Arrange
            var ImagesService = GetImageService(false);
            //Act 
            Image imToCreate = new Image();
            var ima = ImagesService.CreateImage(imToCreate);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => ima);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldCreateaCategory()
        {
            //Arrange
            var ImagesService = GetImageService();
            //Act 
            Image imToCreate = new Image { Id = 1, Name = "fotoVerde", Origin = "peru", Type = "grande" };
            var ima = await ImagesService.UpdateImageAsync(imToCreate.Id ,imToCreate);

            //Assert
            Assert.IsType<Image>(ima);
            Assert.Equal(1, ima.Id);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnInvalidOperatorError()
        {
            //Arrange
            var ImagesService = GetImageService(false);
            //Act 
            Image imToCreate = new Image ();
            var ima = ImagesService.UpdateImageAsync(2, imToCreate);

            //Assert
            await Assert.ThrowsAsync<InvalidOperationException>(() => ima);
        }
        [Fact]
        public async Task UpdateCategoryAsync_ShouldthrowAnError()
        {
            //Arrange
            var ImagesService = GetImageService(false);
            //Act 
            Image imToCreate = new Image { Id = 1, Name = "fotoVerde", Origin = "peru", Type = "grande" };
            var ima = ImagesService.UpdateImageAsync(imToCreate.Id, imToCreate);

            //Assert
            await Assert.ThrowsAsync<Exception>(() => ima);
        }


        private ImagesService GetImageService(bool imageSaved = true)
        {
            
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testImages = new List<ImageEntity>();
            testImages.Add(new ImageEntity { Id=1, Name="fotoAzul", Origin="peru", Type="grande"});
            testImages.Add(new ImageEntity { Id = 2, Name = "fotoVerde", Origin = "Bolivia", Type = "grande" });
            testImages.Add(new ImageEntity { Id = 3, Name = "fotoAzul", Origin = "chile", Type = "grande" });
            testImages.Add(new ImageEntity { Id = 4, Name = "FotoNaranja", Origin = "peru", Type = "grande" });
            IEnumerable<ImageEntity> testImagesIE = testImages;
            foreach (ImageEntity cat in testImagesIE)
            {
                MoqlibraryRespository.Setup(m => m.UpdateImage(cat));
                MoqlibraryRespository.Setup(m => m.CreateImage(cat));
                MoqlibraryRespository.Setup(m => m.GetImageAsyncByIdImage(cat.Id)).Returns(Task.FromResult(cat));
                MoqlibraryRespository.Setup(m => m.DeleteImageAsync(cat.Id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(cat));
            }

            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(imageSaved));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            ImagesService ImagesService = new ImagesService (MoqlibraryRespository.Object, mapper);

            return ImagesService;


        }
    }
}
