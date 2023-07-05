package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.example.demo.serviceimpl.UserDetailsServiceImpl;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebMvc
public class SecurityConfig extends WebSecurityConfigurerAdapter  {

	  @Autowired
	    private JwtAuthenticationEntryPoint unauthorizedHandler;

	    @Autowired
	    private JwtAuthenticationFilter jwtAuthenticationFilter;


	    @Autowired
	    private UserDetailsServiceImpl userDetailsServiceImpl;

	    @Override
	    @Bean
	    public AuthenticationManager authenticationManagerBean() throws Exception {
	        return super.authenticationManagerBean();
	    }

	    @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
//	    @Bean
//		public PasswordEncoder  passwordEncoder() {
//			return  NoOpPasswordEncoder.getInstance();
//
//		}

	    @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(this.userDetailsServiceImpl).passwordEncoder(passwordEncoder());
	    }

	    @Override
	    protected void configure(HttpSecurity http) throws Exception {


	        http
	                .csrf()
	                .disable()
	                .cors()
	                .disable()
	                .authorizeRequests()
	                .antMatchers("/generate-token","/api/teacher/*","/api/create","/api/saveTeacher").permitAll()              
	                .antMatchers(HttpMethod.OPTIONS).permitAll()
	                .antMatchers("/v3/api-docs").permitAll()
	                .antMatchers("/v2/api-docs").permitAll()
	                .antMatchers("/swagger-ui/**").permitAll()
	                .antMatchers("/swagger-resources/**").permitAll()
	                .antMatchers("/webjars/**").permitAll()
	                .anyRequest().authenticated()
	                .and()
	                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
	                .and()
	                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

	        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

	    }


	}
