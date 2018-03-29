package pageObjects;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


import managers.FileReaderManager;

public class HomePage {
	WebDriver driver;
	
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(how=How.ID, using="autocomplete-input")
	private WebElement city;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/nav/ul/li[2]/a")
	private WebElement rent;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/nav/ul/li[1]/a")
	private WebElement buy;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/div[1]/p/a")
	private WebElement past;
	
	
	@FindBy(how=How.ID, using="range-filter-selector-select-filter_huurprijsvan")
	private WebElement minrent;
	
	@FindBy(how=How.ID, using="range-filter-selector-select-filter_huurprijstot")
	private WebElement maxrent;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/nav/ul/li[3]/ul/li[1]/a")
	private WebElement newoption;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/nav/ul/li[3]/ul/li[2]/a")
	private WebElement recreation;	
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/nav/ul/li[3]/ul/li[3]/a")
	private WebElement foreign;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"content\"]/div[1]/div[4]/form/div[1]/div/fieldset/div/div/div[1]")
	private WebElement countrydd;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"Land-belgie\"]")
	private WebElement country;
	
	@FindBy(how=How.ID, using="Straal")
	private WebElement distance;
	
	@FindBy(how=How.ID, using="range-filter-selector-select-filter_koopprijsvan")
	private WebElement min;
	
	@FindBy(how=How.ID, using="range-filter-selector-select-filter_koopprijstot")
	private WebElement max;
	
	@FindBy(how=How.XPATH, using="//*[@class='button-primary-alternative']")
	private WebElement zoek;
	
	
	
	public void enterCity(String name) {
		city.sendKeys(name);
	}
	
	public void selectHuur() {
		rent.click();
	}
	
	public void selectKoop() {
		buy.click();
	}
	public void selectNew() {
		newoption.click();
	}
	public void selectRecreation() {
		recreation.click();
	}
	public void selectPastSearch() {
		past.click();
	}
	public void selectEurope() {
		foreign.click();
	}
	
	public void selectCountryDD() {
		countrydd.click();
	}
	
	public void selectCountry() {
		country.click();
	}
	public void enter() {
		city.sendKeys(Keys.ENTER);
	}
	
	public void selectDistance(String dist) {
		Select dis = new Select(distance);
		dis.selectByValue(dist);
	}
	
	public void selectMinRent(String mini) {
		Select dis = new Select(minrent);
		dis.selectByValue(mini);
	}
	
	public void selectMaxRent(String maxi) {
		Select dis = new Select(maxrent);
		dis.selectByValue(maxi);
	}
	
	public void selectMin(String mini) {
		Select dis = new Select(min);
		dis.selectByValue(mini);
	}
	
	public void selectMax(String maxi) {
		Select dis = new Select(max);
		dis.selectByValue(maxi);
	}
	
	public void enterZoek() {
		zoek.click();
	}

	public void navigateTo_HomePage() {
		driver.get(FileReaderManager.getInstance().getConfigReader().getApplicationUrl());
	}

}
