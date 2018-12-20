using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;


namespace NUnitTestProject3
{
    class UnitTest2
    {
        IWebDriver webdriver = null;

        [SetUp]
        public void Setup()
        {
            webdriver = new ChromeDriver(@"D:\WebPractice\WebApplication4\NUnitTestProject3\bin\Debug\netcoreapp2.1");

            webdriver.Url = "https://www.google.com.tw/";

            Console.WriteLine("SetUp!");
        }

        [Test]
        public void Test2()
        {
            webdriver.FindElement(By.XPath("//*[@id='tsf']/div[2]/div/div[1]/div/div[1]/input")).SendKeys("電動牙刷" + Keys.Enter);
        }

        [TearDown]
        public void ClearUp()
        {
            webdriver.Close();
        }
    }
}
