# Requirements

- Node => v18.0.0

## Description

This task is design for calculation of the Dimensions of Type A post-it notes and Dimensions of Type B post-it notes based on giving criteria. It user don't provide dimensions of paper size, it will take default value that shown in the assignment. Otherwise, you can pass your own dimensions to calcuate it. It can be calculated more than one dimensions of the Type A and Type B notes. System allow you to change Unit which is MILLIMETERS or INCHES.

## Available endpoints

    #### To calucate number of type A note and number of Type B note
    - Method: GET
    - Endpoint: http://localhost:3000/dimensions
    - Response: dimensions object array with numberOfTypeANote and numberOfTypeBNote

    #### To add new dimensions to calucate new notes
    - Method: POST
    - Endpoint: http://localhost:3000/dimensions
    - Body:
    {
    "paperWidth": 41000,
    "paperHeight": 29392,
    "typeAWidth": 76,
    "typeAHeight": 76,
    "typeBWidth": 38,
    "typeBHeight": 51,
    "unit": "mm" // inches
    }
    - Response: dimensions object array

### GET endpoint Sequence Diagram

[![](https://mermaid.ink/img/pako:eNqVkT1PxDAMhv-KlfkKJ8YMJ8EdYmBA4srWxaQuRCROSRzE6XT_nUQtVHwsJIvj13leWz4qE3pSWiV6zcSGdhafIvqOoZwRo1hjR2SBh0Txd3YbWGJw7i9tT_HNGuq43ipWRLPZLH803FfbJCABDDqTHQoVyEgReuuJkw2c4Oa6hfPlPdEWTGHOXhq26By0AXaf1bMCQ4hfFiU9MWbxB2Buw-M7cPaPpZcwQHsYqbkE5H4Kr2AMSRorwEEofecVYB22zic58v9QZ3CxXsPdrVopT9Gj7ct-jtWgU_JMnjqlS9hjfOlUx6dSh1nC_sBGaYmZViqPfZlg3qXSA7pEpw-L-6qI?type=png)](https://mermaid.live/edit#pako:eNqVkT1PxDAMhv-KlfkKJ8YMJ8EdYmBA4srWxaQuRCROSRzE6XT_nUQtVHwsJIvj13leWz4qE3pSWiV6zcSGdhafIvqOoZwRo1hjR2SBh0Txd3YbWGJw7i9tT_HNGuq43ipWRLPZLH803FfbJCABDDqTHQoVyEgReuuJkw2c4Oa6hfPlPdEWTGHOXhq26By0AXaf1bMCQ4hfFiU9MWbxB2Buw-M7cPaPpZcwQHsYqbkE5H4Kr2AMSRorwEEofecVYB22zic58v9QZ3CxXsPdrVopT9Gj7ct-jtWgU_JMnjqlS9hjfOlUx6dSh1nC_sBGaYmZViqPfZlg3qXSA7pEpw-L-6qI)

### POST endpoint Sequence Diagram

[![](https://mermaid.ink/img/pako:eNp1UsluwjAQ_ZWRz1SlVU8-ILVwBzX0UuUyiqdg4SUdO6AK8e-1s5ColDnN8t6bxT6LyisSUgT6bshVtNK4Y7Slg2Q1ctSVrtFF-AjEt9mld5G9Mf_VVtqSC9q71XZ9Wy2Ij7qi0nWlLP-wWIx6El6VAkenxKqJQQ1qATbrYguPY6JTQBNBB3A-whGNVhJe5nN4QwXvebcQO1i2sUtqOR1TQoXGQPRwnTnbFHLDaJthTOFdQl5OQrH3JyBmz2ApBNxRRyAT6C61P9O0Td6yjUZSj5riN03Yt-f7e6cp_jrb8_wJlkwYqVcllxwxE5bYolbph5xzoRRxT5ZKIZOrkA-lKN0l4bCJvvhxlZCRG5qJpk7DDr9JyC9MS85EevlP74f48gs7ttQn?type=png)](https://mermaid.live/edit#pako:eNp1UsluwjAQ_ZWRz1SlVU8-ILVwBzX0UuUyiqdg4SUdO6AK8e-1s5ColDnN8t6bxT6LyisSUgT6bshVtNK4Y7Slg2Q1ctSVrtFF-AjEt9mld5G9Mf_VVtqSC9q71XZ9Wy2Ij7qi0nWlLP-wWIx6El6VAkenxKqJQQ1qATbrYguPY6JTQBNBB3A-whGNVhJe5nN4QwXvebcQO1i2sUtqOR1TQoXGQPRwnTnbFHLDaJthTOFdQl5OQrH3JyBmz2ApBNxRRyAT6C61P9O0Td6yjUZSj5riN03Yt-f7e6cp_jrb8_wJlkwYqVcllxwxE5bYolbph5xzoRRxT5ZKIZOrkA-lKN0l4bCJvvhxlZCRG5qJpk7DDr9JyC9MS85EevlP74f48gs7ttQn)

## Installation

    # Install project and dependencies:
    # Clone the repo from gitlab

    `git@github.com:kthiha-dev/mlion-test.git`

    # Go to project folder and run

```bash
$ yarn install
```

## Running the app locally

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov

# to run all test
$ yarn run test:all
```

## Run With Docker and production ready image

`docker build -t mlion-test-cloud-run .`

And run `docker run -p3000:3000 mlion-test-cloud-run`

## Author

- Author - [Thiha] kthiha3@gmail.com
