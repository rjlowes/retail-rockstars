package com.rockstars.config;

import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebAppInitializer implements WebApplicationInitializer {

	private static final Logger LOG = LoggerFactory.getLogger(WebAppInitializer.class);
	
	/**
	 * Overriding the setup of Root Application Context
	 */
	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		System.out.println("ON STARTUP!!!!");
		LOG.info("ON STARTUP INFO@");
		WebApplicationContext rootContext = createRootContext(servletContext);

	    configureSpringMvc(servletContext, rootContext);
		
	}
	
	private WebApplicationContext createRootContext(ServletContext servletContext) {
		System.out.println("flsjdfkljdskljfklsdjkfjlksdjflkjsdklfjkl");
	    AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
	    //rootContext.register(CoreConfig.class);
	    //rootContext.register(DatabaseConfigHibernate.class);
	    rootContext.refresh();
	
	    servletContext.addListener(new ContextLoaderListener(rootContext));
	    servletContext.setInitParameter("defaultHtmlEscape", "true");
	
	    return rootContext;
	}
	
	private void configureSpringMvc(ServletContext servletContext, WebApplicationContext rootContext) {
		System.out.println("22222222lkfdjlksjkldjfkljdklsfjkldsjflkjl");
		
	    AnnotationConfigWebApplicationContext mvcContext = new AnnotationConfigWebApplicationContext();
	    //mvcContext.register(MVCConfig.class);
	
	    mvcContext.setParent(rootContext);
	    ServletRegistration.Dynamic appServlet = servletContext.addServlet("webservice", new DispatcherServlet(mvcContext));
	    appServlet.setLoadOnStartup(1);
	    Set<String> mappingConflicts = appServlet.addMapping("/");
	
	    if (!mappingConflicts.isEmpty()) {
	    	for (String s : mappingConflicts) {
	    		LOG.error("Mapping conflict: " + s);
	    	}
	    	throw new IllegalStateException("'webservice' cannot be mapped to '/'");
	    }
	}


}
