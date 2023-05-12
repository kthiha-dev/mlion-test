sequenceDiagram
    participant User
    participant Controller
    participant Service


    User->>Controller: Request to calculate paper dimensions GET /dimensions
    Controller->>Service: Call To DimensionService for calculation
    Service->>Service: Calculate max number of Type-A and Type-B post-it notes
    Service-->>User: Return max number of Type-A and Type-B post-it notes. 200 OK


sequenceDiagram
    participant User
    participant Controller
    participant DimensionDTO
    participant Service

    User->>Controller: Add new paper dimensions POST /dimensions
    alt is not valid: 400 Bad Request
        Controller->>DimensionDTO: call to DTO
        DimensionDTO->>DimensionDTO: validation
        DimensionDTO->>User: Show error message
    else
        DimensionDTO->>Service: validation is valid
        Service->>Service: Push new dimensions
        Service-->>User: 201 Created
    end
