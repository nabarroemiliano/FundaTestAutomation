package runners;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/functionalTests",
		glue= {"stepsDefinitions"},
		plugin = {  "pretty", "html:target/cucumber-reports"  } ,
		 monochrome = true
		)
public class TestRunner {

}
