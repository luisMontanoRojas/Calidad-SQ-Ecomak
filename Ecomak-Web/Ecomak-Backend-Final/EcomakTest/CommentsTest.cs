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
    public class CommentsTest
    {
        
        [Fact]
        public async Task GetCategories_ShouldreturnAllCategories()
        {
            //Arrange
            var commentsService = GetCommentsService();
            //Act 
            var com = await commentsService.GetComments(1);

            //Assert
            Assert.IsAssignableFrom<IEnumerable<Commentary>>(com);
        }
        [Fact]
        public async Task GetCategory_ShouldreturnAnException()
        {
            //Arrange
            var commentsService = GetCommentsService();
            //Act 
            var cat = commentsService.GetCommentaryAsync(19, 19);
            //Assert
            await Assert.ThrowsAsync<NotFoundItemException>(() => cat);
        }
        
        private CommentsService GetCommentsService(bool ccommetSaved = true)
        {
            var MoqlibraryRespository = new Mock<IEcomakRepository>();
            var testComments = new List<CommentaryEntity>();
            testComments.Add(new CommentaryEntity { id = 1, author = "Esteban", comment = "Nice Job" , show = false, time = DateTime.Today});
            testComments.Add(new CommentaryEntity { id = 2, author = "Jerson", comment = "Bad", show = false, time = DateTime.Today });
            testComments.Add(new CommentaryEntity { id = 3, author = "Javi", comment = "Great", show = true, time = DateTime.Today });
            testComments.Add(new CommentaryEntity { id = 4, author = "Mauricio", comment = "Good", show = false, time = DateTime.Today });
            IEnumerable<CommentaryEntity> testCommentsIE = testComments;
            foreach (CommentaryEntity com in testCommentsIE)
            {
                int  id = com.id ?? default(int);
                MoqlibraryRespository.Setup(m => m.UpdateCommentary(com));
                MoqlibraryRespository.Setup(m => m.CreateCommentary(com));
                MoqlibraryRespository.Setup(m => m.GetCommentaryAsync(id, false)).Returns(Task.FromResult(com));
                MoqlibraryRespository.Setup(m => m.DeleteCommentaryAsync(id));
                MoqlibraryRespository.Setup(m => m.DetachEntity(com));
            }

            MoqlibraryRespository.Setup(m => m.SaveChangesAsync()).Returns(Task.FromResult(ccommetSaved));

            EcomakProfile myProfile = new EcomakProfile();
            MapperConfiguration configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            Mapper mapper = new Mapper(configuration);

            MoqlibraryRespository.Setup(m => m.GetComments()).Returns(mapper.Map<IEnumerable<Commentary>>(testCommentsIE));

            CommentsService commentsService = new CommentsService(MoqlibraryRespository.Object, mapper);

            return commentsService;


        }
    }
}
