using NUnit.Framework;
using Microsoft.AspNetCore.Mvc;
using WebApplication4;
using WebApplication4.Controllers;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            HomeController homeController = new HomeController();

            var result = homeController.FreePractice();

            Assert.AreEqual("Controller_FreePractice.", ((ViewResult)result).ViewData["Message"]);

            //Assert.Pass("Controller_FreePractice..", ((ViewResult)result).ViewData["Message"]);
        }
    }
}