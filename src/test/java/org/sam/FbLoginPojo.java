package org.sam;

import org.Base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FbLoginPojo extends org.Base.BaseClass{
	
	//1. Non parameterized Constructor
	
	public FbLoginPojo() {
		PageFactory.initElements(driver, this);
	}
	
	//2. Private WebElement
	//WebElement email = driver.findElement(By.id("email")); 
	
	@FindAll({
		@FindBy(xpath = "//input[@id='email']"),
		@FindBy(xpath = "//input[@name='email']"),
		@FindBy(xpath = "//input[@data-testid='royal_email']")
	})
	private WebElement varRef;
	
	public WebElement getVarRef() {
		return varRef;
	}
	
	@FindBy(xpath = "//input[@id='email']")
	private  WebElement Email ;
		

	

	public void setEmail(WebElement email) {
		Email = email;
	}

	public void setVarRef(WebElement varRef) {
		this.varRef = varRef;
	}

	public void setPassword(WebElement password) {
		this.password = password;
	}

	public void setLoginBtn(WebElement loginBtn) {
		LoginBtn = loginBtn;
	}

	@FindBy(xpath = "//input[@aria-label='Password']")
	private WebElement password;
	
	@FindBy(name = "login")
	private WebElement LoginBtn;
	
	
	//3. Getters to access webelements outside the class 
	
	public WebElement getEmail() {
		return Email;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginBtn() {
		return LoginBtn;
	}
	
	
}
