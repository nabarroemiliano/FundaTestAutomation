package stepsDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import managers.FileReaderManager;
import managers.PageObjectManager;
import managers.WebDriverManager;
import pageObjects.HomePage;
import testDataTypes.Search;

public class Steps {
	HomePage hp ;
	WebDriver driver;
	PageObjectManager pageObjectManager;
	WebDriverManager webDriverManager;
	Search search;
	
	@Given("^user is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		webDriverManager = new WebDriverManager();
		System.setProperty("webdriver.gecko.driver",FileReaderManager.getInstance().getConfigReader().getDriverPath());
		driver = webDriverManager.getDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(FileReaderManager.getInstance().getConfigReader().getImplicitlyWait(), TimeUnit.SECONDS);
		pageObjectManager = new PageObjectManager(driver);
		hp = pageObjectManager.getHomePage();
		hp.navigateTo_HomePage();
	}


	@When("^he select the Koop option$")
	public void he_select_the_Koop_option() throws Throwable {
	    hp.selectKoop();
	    
	}
		
		
	
		@When("^he select the Huur option$")
		public void he_select_the_Huur_option() throws Throwable {
		    hp.selectHuur();

		}
		
	@When("^choose a minimum price for rent$")
	public void choose_a_minimum_price_for_rent() throws Throwable {
		hp.selectMinRent(search.minrent);
	}
	
	@When("^choose a maximum price for rent$")
	public void choose_a_maximum_price_for_rent() throws Throwable {
		hp.selectMaxRent(search.maxrent);
	}

	@When("^enter a \"([^\"]*)\" city name$")
	public void enter_a_city_name(String city) throws Throwable {
		search = FileReaderManager.getInstance().getJsonReader().getCityByName(city);
		hp.enterCity(search.city);
		hp.enter();
	}

	@When("^choose a range from the location$")
	public void choose_a_range_from_the_location() throws Throwable {
		hp.selectDistance(search.distance);
		
	}

	@When("^choose a minimum price$")
	public void choose_a_minimum_price() throws Throwable {
		hp.selectMin(search.min);
	}

	@When("^choose a maximum price$")
	public void choose_a_maximum_price() throws Throwable {
		hp.selectMax(search.max);
	}
	
	@When("^he select the Europe option$")
	public void he_select_the_Europe_option() throws Throwable {
	    hp.selectEurope();
	}

	@When("^he choose a Country$")
	public void he_choose_a_Country() throws Throwable {
	   hp.selectCountryDD();
	   hp.selectCountry();
	}

	@When("^he enter Zoek Europe$")
	public void he_enter_Zoek_Europe() throws Throwable {
		hp.enterZoek();
	}




	@When("^enter Zoek koop$")
	public void enter_Zoek_koop() throws Throwable {
		hp.enterZoek();
	    
	}

	@When("^enter Zoek huur$")
	public void enter_Zoek_huur() throws Throwable {
		hp.enterZoek();
	}





}
