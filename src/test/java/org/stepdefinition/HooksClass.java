package org.stepdefinition;

import org.Base.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass{
	
	@Before(order = 1)
	//precondition
	private void precondition2() {
		LaunchBrowser();
		System.out.println("Launch the Browser");
		
	}
	
	@Before(order = 2)
	private void precondition1() {
		
		windowMaximize();
		System.out.println("Maximize the Window");

	}
	@Before(order = 3 , value = "@Smoke")
	private void precondition3() {
		System.out.println("Precondition 3");

	}
	
	@After(order = 10 , value = "@Smoke")
	//postcondition
	private void postcondition2() {
		System.out.println("Take screenshot of scenarios");

	}
	@After(order = 4)
	//postcondition
	private void postcondition1() {
		closeEntireBrowser();
		System.out.println("Close Entire Browser");

	}


}
