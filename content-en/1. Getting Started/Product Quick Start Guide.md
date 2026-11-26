---
title: Product Quick Start Guide
---

> [!important] Be sure to check this!
> This is the most basic guide to connecting Dabit Solution LED display controllers and LED modules. For the best learning effect, we recommend that you connect the actual equipment and follow each step of the guide with **DabitOne**.


### 1. Check the power and the connections
- Connect the power to the controller and the LED modules
- Connect the controller to the LED modules
- Connect the controller to the PC/laptop/PLC (TTL, RS232, RS485, Ethernet, Wi-Fi, and so on)
- Download the latest version of DabitOne from [[Software Downloads]]

### 2. Communication settings

#### TTL/RS232 connection

1. `통신` (Communication) tab
2. Select `Serial`
3. Set the communication port: `포트` (Port) (check the connected port in Device Manager > Ports)
4. Set the communication speed: `속도` (Speed) (the default speed is 115200. Check the set speed with the communication speed search)

#### Ethernet connection

> [!note] How to open dbNet
> - DabitOne: `통신` (Communication) > `dbNet`
> - DBPS: `설정` (Settings) > `통신설정` (Communication settings) > `dbNet`

- Check the network information of the controller and connect the controller
	1. 통신 (Communication) > dbNet
	2. Search
	3. Select the MAC address of the controller that you want to connect in the list
	4. **Check the network information**: IP Address, Subnet Mask, Gateway, IP Port, and so on
	5. Add
	6. Check that Client TCP/IP is selected, and check IP Address and IP Port
- Change the network information of the controller, and then connect the controller
	1. 통신 (Communication) > dbNet
	2. Search
	3. Select the MAC address of the controller that you want to connect in the list
	4. **Change the network information**: IP Address, Subnet Mask, Gateway, Port, and so on
	5. Set
	6. Search
	7. Select the MAC address of the controller that you want to connect in the list
	8. Check that the network information changed
	9. Add
	10. Check that Client TCP/IP is selected, and check IP Address and IP Port
#### Reference
- **You can check the communication connection status with the connection test button**,
	- In DBPS, check it with `포트열기` (Open port) > `연결확인` (Check connection)
- The settings are saved automatically as soon as you enter them. You do not need to save or close anything. If the physical connection and the settings are correct, the communication connection is complete when you check the communication item and the Serial port, IP Address, and so on

> [!note] For more about the Ethernet connection, see [[2.1.1. Ethernet Communication Settings]]

### 3. Set the LED display size

- 설정 (Settings) > 전광판 화면 구성 (LED display screen configuration)
- Enter `세로` (Height), `가로` (Width), `배열` (Layout), and `BPP` for all the LED modules that you set up
- 전송 (Send)
	- In DBPS, apply it with the `설정` (Set) button

> [!note] For details, see the following
> - LED modules: [[2.6.1. LED Module Guide]], [[2.6.2. LED Module Layout]]
> - How to set the LED display size: [[2.2.1. Screen Size Settings]]

### 4. Set the display signal

> [!important] Be sure to check this!
> Before you set the display signal, check the display signal of the module in [[3.1. LED Module Information and Display Signals]]
> For modules of other companies, ask [[Repair Service and Technical Inquiries|Dabit Solution]] whether they are compatible with the controller before you buy the controller, or send the module and request a compatibility test


- 설정 (Settings) > 표출신호 설정 (Display signal settings) 
- Display signal: `the display signal of the module`
- Color Order: `RGB` — if a color that is different from the color you sent shows, change it one at a time, starting from RGB. How: [[2.3.1. Display Signal Settings]], «When the colors look different»
- Scan Order: `138 IC` (default value)
- 전송 (Send)
### 5. Display test
- Test module: DABIT P3 2R6C 16S
- 전송 (Send) > HEX 프로토콜 (HEX protocol) > text color: `1234567`, text: `적녹노파분청흰Aa12!@` («red, green, yellow, blue, pink, cyan, white» + Aa12!@)
	- In DBPS, `프로토콜 전송` (Send protocol) > select `헥사 프로토콜` (HEX protocol)
- Display screen
	![[guide2.png|350]]
- If the modules are smaller than 2 rows and 6 columns, check the display with the move effect
	- 입장효과 (Entry effect): `이동하기` (Move)
	- 퇴장효과 (Exit effect): `이동하기` (Move)
**The video below makes the content easier to understand.**
<iframe width="560" height="315" src="https://www.youtube.com/embed/hQ26Y2i-_5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Watch on the Dabit Solution YouTube channel: https://www.youtube.com/watch?v=hQ26Y2i-_5c (Korean)



---
