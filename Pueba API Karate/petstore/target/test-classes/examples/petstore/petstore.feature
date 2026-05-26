Feature: Como usuario debería poder crear, consultar y actualizar una mascota en Swagger PetStore

  Background:
    * url baseUrl
    * def petId = 2026
    * def petName = 'Luna'


  Scenario: Añadir una mascota a la tienda
    Given path 'pet'
    * def payload = read('classpath:examples/petstore/request/createPet.json')
    * set payload.id = petId
    * set payload.name = petName

    And request payload
    When method post
    Then status 200
    And match response.id == petId
    And match response.name == petName
    * print response

  Scenario: Consultar la mascota ingresada previamente
    Given path 'pet', petId
    When method get
    Then status 200
    And match response.id == petId
    And match response.status == 'available'
    * print response

  Scenario: Actualizar el nombre y el estatus a vendido
    Given path 'pet'
    * def updatePayload = read('classpath:examples/petstore/request/updatePet.json')
    * set updatePayload.id = petId
    * set updatePayload.name = 'Lunita Oquendo'
    * set updatePayload.status = 'sold'

    And request updatePayload
    When method put
    Then status 200
    And match response.name == 'Lunita Oquendo'
    And match response.status == 'sold'
    * print response

  Scenario: Consultar la mascota modificada por status
    Given path 'pet', 'findByStatus'
    And param status = 'sold'
    When method get
    Then status 200
    And match response[*] contains { id: '#(petId)', name: 'Lunita Oquendo', status: 'sold', category: '#ignore', photoUrls: '#ignore', tags: '#ignore' }
    * print response