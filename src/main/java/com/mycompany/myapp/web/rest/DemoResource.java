package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing Role.
 */
@RestController
@RequestMapping("/demo")
public class DemoResource {

    private final Logger log = LoggerFactory.getLogger(DemoResource.class);

    public DemoResource() {
     
    }

    /**
     * POST action: execute shell.
     *
     * @return the ResponseEntity with status.
     */
    @PostMapping("/action")
    @Timed
    public ResponseEntity<String> createRole() {
        log.info("\n\nREST request to active shell.\n\n");
     
        // execute some shell
        
        return new ResponseEntity<String>("hello, this is test!", null, HttpStatus.OK);
    }

}
