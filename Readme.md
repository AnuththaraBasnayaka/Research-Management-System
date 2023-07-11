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

Diagram_edit-Room Service Cashier Producer Senario .drawio.png image illustrate the workflow

### Room service cashier
According to this workflow of consumer room service cashier here can list out the room details by using option 01 Then using option 2 can enter Room ID, no of room and can generate bill. User can iterate the process and at the end user can calculated final bill. Using option 3 user can exit from program. Here user can enter client name to the bill and add date and time indicating the receipt generated moment. If there is any other invalid input system notify it to user. 

### Commands Issued for excute the program :
Step 01:
need to start related producers and consumers so that used 

**osgi>lb**

Step 02:
After Listing all bundles find correct project Producer ID from the list and run


**osgi>start << id >>**

Step 03:
After the find consumer ids and excute them


**osgi>start << id >>**

Step 04:
After run the program stop subcribers and consumers 


**osgi>stop << id >>**

🚀This project contain 1 producer and 2 consumers (1:2)




