# Room Service management
It's a retail scenario in which a cashier and a manager work together to perform room service for their customers. There are two consumers and one producer in this scenario, which includes a manager consumer and a Cashier consumer and Room Service Producer. The system's manager consumer will add room details to the discount details. The cashier can then generate a bill based on the room information. 

### Room Service manager consumer
In this below diagram shows the workflow of the Room Service manager consumer. 
There are 06 options to be select:

01. Add a new Room Type 
02. Update an existing Room Details 
03. Delete an existing Room Details 
04. List Room Details 
05. Search Room Details 
06. Exit
   
User can enter any of above mention option and can navigate but if enter invalid number cannot perform the action and navigate to the beginning. In here user can enter room type, room price and room discount. Then user can update delete above details according to the user preference. In addition to the above mention functionality can also list out the room details and search room details by the name. If there is any other invalid input system notify it to the user Here RoomID is auto generated, and final price will be calculated.

Bellow image illustrate the workflow;

![Alt Text](path/to/your/image.jpg)
