package org.stepdefinition;

import io.cucumber.datatable.*;

import java.util.List;
import java.util.Map;

import org.Base.BaseClass;
import org.sam.FbLoginPojo;
import org.sam.SignINPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class FacebookRegistraion extends BaseClass {
	
	@Given("To launch the browser and maximize window")
	public void to_launch_the_browser_and_maximize_window() {
	   LaunchBrowser();
	   windowMaximize();
	}
	SignINPojo s;
	FbLoginPojo f;
	@When("To launch url of fb application")
	public void to_launch_url_of_fb_application() {
	   launchURL("https://en-gb.facebook.com/");
	}

	@When("To click the create new account button")
	public void to_click_the_create_new_account_button() {
	   
		s = new SignINPojo();
		clickBtn(s.getCreateNewAcc());
	}

	@When("To pass firstname in firstname text box")
	public void to_pass_firstname_in_firstname_text_box(DataTable d) throws InterruptedException {
	   
		Thread.sleep(3000);
		Map<String, String> m = d.asMap(String.class, String.class);
		s = new SignINPojo();
		passText(m.get("firstname1"), s.getFirstNameTxtBox());
	}

	@When("To pass secondname in secondname text box")
	public void to_pass_secondname_in_secondname_text_box() {
	    
		s = new SignINPojo();
		passText("Selva", s.getSecondNameTxtBox());
	}

	@When("To pass mobileno or email in email text box")
	public void to_pass_mobileno_or_email_in_email_text_box(DataTable d) {
		
		List<Map<String, String>> m = d.asMaps();
		s = new SignINPojo();
		passText(m.get(1).get("password1"), s.getMobileEmailTxtBox());
	}

	@When("To create new password using new password text box")
	public void to_create_new_password_using_new_password_text_box() {
	    
		s = new SignINPojo();
		passText("Tamil18", s.getNewPasswordTxtBox());
	}
	

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
	   
		closeEntireBrowser();
	}

	@Given("To launch the chrome browser and maximize window")
	public void to_launch_the_chrome_browser_and_maximize_window() {
	   LaunchBrowser();
	   windowMaximize();
	}

	@When("To launch the url of the facebook application")
	public void to_launch_the_url_of_the_facebook_application() {
		launchURL("https://en-gb.facebook.com/");
	   
	}

	@When("To pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
		
		f = new FbLoginPojo();
		passText("thamizhselva181188@gmail.com", f.getEmail());
  
	}

	@When("To pass invalid password in password field")
	public void to_pass_invalid_password_in_password_field() {
	   
		f = new FbLoginPojo();
		passText("Tamil11", f.getPassword());
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
	    
		f = new FbLoginPojo();
		clickBtn(f.getLoginBtn());
	}

	@When("To check whether navigate to the home page or not")
	public void to_check_whether_navigate_to_the_home_page_or_not() {
	  
		System.out.println("To check facebook the credicational");
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		closeEntireBrowser();
	   
	}

	@When("User has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
		launchURL("https://en-gb.facebook.com/");
	    
	}

	@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String em) {
		f = new FbLoginPojo();
		passText(em, f.getEmail());
	    
	}

	@When("User has to hass the data {string} in password field")
	public void user_has_to_hass_the_data_in_password_field(String pass) {
	   
		f = new FbLoginPojo();
		passText(pass, f.getPassword());
	}

	@When("User has to click login button")
	public void user_has_to_click_login_button() {
		clickBtn(f.getLoginBtn());
	   
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		closeEntireBrowser();
	    
	}
}
	
	
	


