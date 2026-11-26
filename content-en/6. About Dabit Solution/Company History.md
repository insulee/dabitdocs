---
title: Company History
---

> [!summary]+ 2025 
> **Major business results**
> - **LED display systems for special vehicles**
>   - Development of an LED display system for patrol cars for a special-vehicle maker (4-row foldable, 2-row fixed)
>   - Development of a 2-row LED display system for ambulances for a special-vehicle maker (based on DABIT502)
> - **Smart multi-sensor systems**
>   - Development of a multi-sensor system for a signage company
>     - Integration and simultaneous measurement of fine dust, vibration, and noise sensors
>   - Upgrade of a water level information LED display system for an electronics company
>
> **Technical development results**
> - **Software/firmware architecture redesign**
>   - Introduction of the V3 firmware architecture for DB6xx (DIBD6xx)  
>     - Separation of display processing (dispCore) and main logic (mainCore)  
>     - Better feature extensibility and maintenance efficiency through a modular structure
>   - Development of DABIT502 (ESP32) firmware V3  
>     - Stronger stability and real-time processing based on FreeRTOS  
>     - Addition of various components such as USB Host (MSC)
> - **Firmware versions**
>   - DB6xx firmware V3.0.8, V3.1.4
>   - DABIT502 firmware V3.3.1, V3.3.3
> - **Technical documents and development environment**
>   - Systematization of development documents with Doxygen, Markdown, and other tools
>   - Setup of integrated development environments such as uVision, VSCode (PlatformIO), and CMake

> [!summary]+ 2024 
> **Major business results**
> - **Smart sensor and IoT systems**
>   - Development of a fine dust measurement system (DSM101) for a signage company
>   - Development of a water level information LED display system for an electronics company
>   - Development of an MQTT protocol integration system for a road traffic agency
> - **Customer-specific solutions**
>   - Upgrade of the system for serving robots for a robotics company
>     - Multilingual font support (Chinese, European extension)
>     - Provision of a dedicated firmware download tool (V3.9.6) and technical support
>   - Maintenance of the AD protocol matching system (2020 project)
>
> **Technical development results**
> - **Software/firmware**
>   - Development of DABIT502 firmware V2.3.4, V2.4.3
>     - Support for the fine dust sensor (DSM101) integration protocol
>     - Development of vibration sensor integration technology
>     - Support for the water level data logger communication protocol
>   - Development of DB6xx (DIBD6xx) firmware V2.2.0, V2.5.2
>   - Feature expansion of operating software such as DabitChe / DABITSimulator / DabitNet_S
>     - Development of a dedicated version (V2.2.0) for a robotics company
> - **IoT and communication technology**
>   - Development of an MQTT protocol integration function
>   - Documentation of the Socket communication guide for the next-generation controller (DABIT300)
> - **Hardware and firmware management**
>   - Systematic firmware management per hardware type, such as the ESP32-S3-based DABIT502 (PV10)
>   - Setup of a stable firmware distribution system with a flash download tool

> [!summary]+ 2023 
> **Major business results**
> - **Next-generation systems and smart solutions**
>   - Development of a smart bus stop system for a partner company
>     - Integration of temperature/humidity (SHT31) and fine dust (UPD-M010UB) sensors
>   - Development of a speed limit display system for a partner company
>   - Development of a noise measurement LED display system for an LED company
>   - Development of LED display font parameters for serving robots for a robotics company
>   - Dedicated HUB75 module control system for a partner company
> - **IT/technology development**
>   - Development of DabitChe V8.910 for smart traffic lights
>
> **Technical development results**
> - **Next-generation controller development (ESP32-based)**
>   - Development of the DABIT300/502 series
>     - Implementation of Webserver and OTA (Over-the-Air) firmware update functions
>     - Built-in wired and wireless communication such as Wi-Fi, Ethernet, and Bluetooth
>     - Support for network protocols such as HTTP and NTP
>     - Introduction of the PlatformIO development environment
>   - Development of an ESP32-S3-based system (for a robotics company)
> - **Software/firmware**
>   - Development of DIBD6xx firmware V8.89 ~ V9.20
>   - Development of DABIT502 firmware V2.0.5
>     - Protocol support for multi-environment sensors (temperature/humidity, fine dust) for smart bus stops
>     - Implementation of a speed limit display function with background images
>   - Development of the DabitChe operating program V8.910
>     - Addition of smart traffic light control functions

> [!summary]+ 2022 
> **Major business results**
> - **Industrial system and protocol development**
>   - Development of a weather information LED display system for a partner company (5 frames)
>   - Change of protocol commands (0x40 to 0x4A) and custom firmware development for an LED display maker
>   - Upgrade of the USB storage function for a partner company
> - **After-sales service and maintenance**
>   - Maintenance of a partner company's system (2015 project)
>
> **Technical development results**
> - **Software/firmware**
>   - Major update of DIBD6xx firmware V8.xx (V8.72 ~ V8.88)
>     - Stabilization and optimization of the USB storage function
>     - Better network communication performance (LAN response time 500ms, MSS 1460byte)
>     - Addition of lightweight options such as 3D effect removal (No3D)
>     - Development of a weather sensor data frame integration function
>   - Feature expansion of the DabitChe operating program
>     - More supported background images (255)
>     - Support for various firmware (DIBD500/600 families) and stronger management functions
>   - Development of DIBD500/501 series firmware (V7.98, V8.72)
>   - Development of DIBD601 series firmware (V7.99)

> [!summary]+ 2021 
> **Major business results**
> - **Environmental sensor systems**
>   - Development of a noise/fine dust measurement system for a partner company
>     - Implementation of a function to save measurement data as CSV files to USB memory
>   - Upgrade of the air-quality system at an incineration plant for a partner company (DIBD1xx/6xx V7.89 applied)
> - **Traffic systems**
>   - Performance improvement of a vehicle speed detection system for a partner company (DIBD6xx V7.90 applied)
> - **IT/technology development**
>   - Development of an SPI communication (Master/Slave) system between DIBD controllers
> - **Solar inverter integration system**
>   - Maintenance and stronger stability of integration systems for major inverter makers
>
> **Technical development results**
> - **Software/firmware**
>   - Development of DIBD6xx firmware V7.89 ~ V7.95
>   - Development of a USB data logging function
>     - Real-time saving of environmental sensor (noise, fine dust) data to USB memory as CSV files
>     - Timestamp recording linked to the RTC (Real-Time Clock)
>   - Implementation of an SPI communication function
>     - Development of SPI Master/Slave functions for high-speed data communication between DIBD controllers
>     - Better communication efficiency with port interrupts (PortInt)
>   - Development of DIBD1xx series firmware (V7.89, V7.90)
>   - Development and stabilization of DabitChe / DABIT Simulator v7.82, v7.90

> [!summary]+ 2020 
> **Major business results**
> - **Environmental system upgrades**
>   - Function improvement of the fine dust traffic light system for a partner company
>     - Addition of a server transmission function (support for new/old sensors)
>     - Addition of modem communication and a display selection function with a DipSwitch
>   - Upgrade of a water quality measurement system for a partner company (2013 project)
>   - Upgrade of a wind speed status board system on an island for a partner company (2017 project)
>   - Upgrade of the air-quality system at an incineration plant for a partner company (2018 project)
> - **Industrial systems**
>   - Deployment of a production line system for a brewery
>   - Development of a system linked to a partner company's protocol for a steelmaker
>   - Upgrade of a discrete-signal timer system for an LED display maker (2018 project)
>   - Function improvement of a vehicle speed detection system for a partner company (2018 project)
> - **Protocol development and support**
>   - Development of an AD protocol matching and integration system
>   - Upgrade of a Modbus integration system for an LED display maker (2013 project)
> - **Other**
>   - Upgrade of an outdoor status board system at a convention center (2015 project)
>
> **Technical development results**
> - **Software/firmware**
>   - Development of DIBD6xx firmware V7.72 ~ V7.76
>     - Support for new fine dust sensor (AM1005, SUM2017TD) protocols
>     - Stronger CDMA modem integration and remote data transmission functions
>     - Support for multiple display modes with a DipSwitch
>     - Implementation of a dedicated communication protocol for a steelmaker (partner company)
>   - Development of DabitChe V7.70 ~ V7.73
> - **Protocols**
>   - V7 firmware migration of systems based on the existing DIBD protocol (V6)
>   - Development of AD protocol analysis and matching technology
>   - Wider support for various industrial (2 partner companies) and environmental (water quality, air) protocols

> [!summary]+ 2019 
> **Major business results**
> - **Environmental sensor and control systems**
>   - Development of an air-purifying plant cultivation control solution for a partner company
>   - Noise meter integration system for a partner company
>   - Upgrade of the fine dust traffic light system for a partner company
> - **Industrial systems**
>   - Modbus frequency measurement system for a partner company (linked to MT4W)
>   - Expansion of a DipSwitch input system for a partner company (IN8P)
>   - Function improvement of a manufacturer's Unicode system, with a partner company
> - **Solar inverter integration system**
>   - Maintenance and function improvement of integration systems for major inverters (5 inverter makers and others)
>
> **Technical development results**
> - **Software/firmware**
>   - Development of DIBD6xx firmware V7.63 ~ V7.67
>     - Development of a real-time display function for noise measurement data
>     - Better frequency measurement precision with the Modbus protocol
>     - DipSwitch input port expansion (8-Point)
>   - Development of firmware for the DABIT510 V5.3 control board
> - **Hardware**
>   - Circuit design of the DABIT510 V5.3 control board (partner company project)
> - **Protocols**
>   - Development of a dedicated communication protocol for the air-purifying plant cultivation system
>   - Development of a noise meter integration protocol

> [!summary]+ 2018 
> **Major business results**
> - **Environmental sensor systems (fine dust)**
>   - Development of a DC1700 fine dust measurement system for a partner company
>   - Development of a fine dust traffic light linked to a PM2105 sensor (8R4C)
>   - Development of a fine dust measurement system for plants (4 rows × 20 columns)
>   - Fine dust information system, 4 rows × 8 columns
>   - Environmental data display system for an incineration plant
>   - Development of a GDK101 radiation sensor integration system
> - **Parking control and industrial systems**
>   - Parking lot Up/Down count system for a partner company
>   - Production line system at a chipmaker's plant, with a partner company
>   - DipSwitch input and RS485 communication system for a partner company
>   - Double-sided information system, 2 rows × 6 columns, for a partner company
>   - Input 1/Output 2 discrete-signal control system for an LED display maker
>   - Timer display system linked to discrete signals for an LED display maker
>   - LED display system linked to a keypad for a partner company
>   - RS232 keypad integration system for a partner company
> - **IT/technology development**
>   - Development of a Unicode ROM storage function for a manufacturer's system, with a partner company
>   - Upgrade of a vehicle speed detection system for a partner company
>   - Development of an RSS feed integration function
>
> **Technical development results**
> - **Software/operating programs**
>   - Development of DabitChe V7.xx
>   - Development of DABITSimulator_V7
> - **Hardware/firmware**
>   - Development of DIBD6xx firmware V7.06 ~ V7.58
>     - Development of environmental sensor (fine dust, radiation) integration protocols (D695)
>     - Support for various input methods such as Up/Down switches and DipSwitches
>     - Development of keypad (RS232, direct connection) control functions
>   - Development of firmware with OldADT protocol support
>   - Upgrade of the V3 to V6 protocol conversion system for a partner company (V7.58 applied)
>   - Development of firmware with 8Color support (V7.21)
> - **Protocols**
>   - Development and feature expansion of DIBD Protocol V7
>   - Stronger Unicode support for a manufacturer's system

> [!summary]+ 2017 
> **Major business results**
> - **Parking control and guidance systems**
>   - Joint projects with a partner company
>     - Parking systems for 5 apartment complexes and shopping malls
>   - Intelligent transportation system (ITS) joint projects
>     - Parking control systems at 4 sites (an apartment complex, a corporate site, and others)
>   - Joint projects with another partner company
>     - Parking systems at 3 sites (an apartment complex and others)
>   - Other joint projects
>     - Deployment of many information systems with 5 partner companies (2 universities, a hypermarket, an office building, and others)
>     - System integration with 2 partner companies and others
> - **Industry/manufacturing**
>   - Production status system for a manufacturer (partner company)
>   - Large 40mm 32Duty LED display system for a partner company (03B, 4x16)
>   - V3 to V6 protocol conversion system for a partner company (08C)
>   - 10x8 A2 LED display system for a partner company
>   - Wind speed status board on an island for a customer (partner company)
> - **IT/technology development**
>   - Development of a 19200bps communication system for a partner company
>   - Development of an analog clock display function (DabitChe V6.65)
>   - Development of an integrated discrete-signal board for a partner company
>   - Modbus-linked energy display system for a partner company (6Kw)
>   - Anemometer integration system for a partner company
>   - Development of a controller compatible with the imported VL128TR buffer board, for an LED display maker
>   - Protocol matching system for an electronics company
>   - Integration of a third-party SCL protocol for a partner company
>   - Integration with a partner company's system
>
> **Technical development results**
> - **Software/operating programs**
>   - Development of DabitChe V6.54 ~ V6.74 and field stabilization
>   - Development of custom functions for various partner companies (3 partners and others)
>   - Development of the SensorView program
>   - Addition of special display functions such as an analog clock
> - **Hardware/firmware**
>   - Development of DIBD6xx firmware V6.65 ~ V6.75
>   - Stronger system stability with SysTick
>   - Development of FND control functions for ITS
>   - Addition of stability functions such as a 10-second repeat reset (RepeatReset10s)
>   - Development of the SI Detection function
>   - Development of control firmware for special hardware, such as a partner company's hardware


> [!summary]+ 2016 
> **Major business results**
> - **Public sector/traffic (ITS)**
>   - Illegal parking enforcement system for a city government, with a partner company
>   - Vehicle speed detection system for a partner company
>   - Projects related to intelligent transportation systems (ITS)
> - **Industry/manufacturing**
>   - 6x14 LED display system for a chipmaker's production line, with a partner company
>   - 1x10 LED display system for a manufacturer, with a partner company
>   - 10-message, 2400bps communication system for an LED display maker (DIBD640P)
>   - Application of semi-outdoor/indoor 8Duty chips at a university and in a city (2 partner companies)
>   - V3 (horizontal) to V6 (row-by-row) transmission protocol conversion system for a partner company
>   - Integration system for 2 partner companies (DIBD6xx_V6.54, V6.55)
>   - InPut/OutPut system for a partner company (DIBD6xx_V6.60)
> - **Environment/energy (solar inverter integration system)**
>   - Solar system for a partner company
>   - Development and supply of integration systems for major inverter makers (6 makers and others)
>   - Solar generation status system at a convention center
> - **IT/technology development**
>   - Development of a DIBD Protocol V6 simulator for a partner company
>   - Discrete-signal control and emergency message display system for a partner company
>   - Development of afterimage removal technology for a partner company
>   - TTL Enable, 4x8 to 1x32 expansion system for a partner company (DIBD6xx_V6.64)
>   - XY coordinate control of the emergency parameter (Emg parm) for a partner company (DIBD6xx_V6.63)
>   - Anemometer integration system for an LED display maker
>   - V6.47 integration system for a partner company (DIBD6xx_V6.53)
>
> **Technical development results**
> - **Protocols/software**
>   - Stabilization and feature expansion of DIBD Protocol V6
>   - Development of a DIBD V3 to V6 protocol converter
>   - Support for customer development with a DIBD Protocol V6 simulator
> - **Hardware/firmware**
>   - Development of DIBD6xx series firmware V6.47 ~ V6.64
>   - Upgrade of display control technology such as afterimage removal and TTL Enable
>   - Stronger integration with various external sensors such as anemometers

> [!summary]+ 2015 
> **Major business results**
> - **Public sector/traffic**
>   - Development of a bus information system (BIS) for a partner company (FC, 4x12)
>   - Information LED display for a provincial government office (3C, 1x20)
>   - Illegal parking enforcement systems in 2 regions (20 sites)
>   - Bus stop information system for a partner company
>   - Information LED display at an elevator maker's head office (partner company, 1x16, 1x4)
>   - Information LED display for a regional police agency (inverter-linked, 2x24)
> - **Industry/manufacturing**
>   - Industrial LED display for a partner company (3C, 2x4)
>   - Frequency test system for a partner company (24B, 4x4)
>   - DIBD680 control system for an LED display maker (14x20, 2 units)
>   - Production line message system for a chipmaker (50 messages)
>   - Production status system for a partner company (V3/V6 protocol, 16x16 ASC)
>   - V5-V3 protocol compatible system for a partner company
> - **Environment/energy (solar inverter integration system)**
>   - Gas supply status board for a partner company (3C, 2x20)
>   - Development of integration systems for many solar inverters (based on DIBD600/DIBD6xx)
>     - 6 inverter makers
> - **IT/technology development**
>   - Development of a USB storage function for a partner company (FC, 3x06)
>   - Modbus frequency display system for a partner company
>   - Discrete-signal control and emergency message display system for a partner company
>   - Discrete input integration system for an LED display maker (6 discrete signals, 4 shown at a time)
>   - Discrete input hold and output control system for a communications company
>   - PPM display system linked to an MT4W-DA-48 meter
>   - Unicode font ROM storage system for a partner company
> - **Sports/culture**
>   - Information LED display at a gymnasium
>
> **Technical development results**
> - **Hardware development**
>   - Development and stabilization of the DIBD600/680 series
>   - Development of DIBD6xx V6.28 ~ V6.384
> - **Software/firmware development**
>   - Start of DIBD Protocol V6 development
>   - Development of USB storage firmware
>   - Unicode font processing and ROM storage function
>   - Development of a date/time countdown function
>   - Development of a DIBD V5 to V3 protocol converter (compatibility mode)
> - **Communication technology**
>   - Stabilization of Modbus RTU integration (frequency measurement)
>   - Support for communication protocols of many solar inverters (3 inverter makers and others)

> [!summary]+ 2014
> **Major business results**
> - **Modbus communication systems**
>   - Modbus 485 master LED display for a partner company (0x04)
>   - Modbus system for a customer, with an LED display maker
>   - LED display linked to the MT4W-DA-48 meter interface
>   - Development of the DIBD Protocol V5.5 Memory Map for Modbus communication
> - **Full-color/3-color LED display systems**
>   - 3C 6x15 LED display system for a partner company
>   - 3C 1x66 LED display system for a partner company
>   - DIBD260P 02B96M LED display for a partner company
>   - 3C 1x9 discrete-signal control LED display for an LED display maker
>   - FC 3x12 BIS LED display for a partner company
>   - Production status 3C 4x24 LED display for a partner company
> - **Industrial production status systems**
>   - 08B 176M LED display system for an LED display maker
>   - 02B-24B DIBD780 system for a partner company
>   - 02B DIBD220-V3.05 8Port output system for a partner company
>   - 24B 4x4 frequency test system for a partner company
> - **Solar inverter integration systems**
>   - LED displays linked to an inverter maker's inverters (at an elementary school and a public training institute)
>   - LED display communicating with an inverter maker's 1-phase/3-phase PCS
>   - System linked to an inverter maker's GCI-RS422 inverters
>   - LED display linked to an inverter maker's solar inverters
>   - Communication protocol system for an inverter maker's solar gateway
>   - LED display linked to an inverter maker's three-phase inverters (at a convention center)
> - **Traffic/logistics systems**
>   - Parking system for a partner company (parking lot control)
>   - Inverter status board at a convention center, 02B 1x18
> - **Other special systems**
>   - Project for an instrumentation company
>   - Dabit Solution purchase order system
>   - DV-SW system for a gas supply status board
>   - DIBD Display V6.20 operating program
>
> **Technical development results**
> - **Inverter integration communication technology**
>   - Development and standardization of an LED display protocol for inverter makers
>   - Implementation of an inverter maker's 1-phase/3-phase PCS communication protocol
>   - GCI-RS422 single-phase/three-phase inverter protocol of an inverter maker
>   - Development of a standard inverter communication protocol for an inverter maker
>   - Integration of device-to-device communication protocols for an inverter maker's solar gateway
>   - Three-phase inverter communication protocol of an inverter maker
> - **Hardware system development**
>   - Development of the DIBD600 V6.00~V6.25 series
>   - Upgrade of the DIBD123/220/261 V5.30~V5.50 series
>   - Development of the DIBD400 LPC4330 V5.60 series
>   - DIBD780 control system
>   - LPC4330-based dual-core system
> - **Modbus communication technology**
>   - Support for Modbus RTU 0x03/0x04/0x06 commands
>   - MT4W-DA-48 interface integration technology
>   - Master/slave communication protocol
>   - Communication stability with CRC16 checksums
> - **FPGA technology**
>   - Development of the FPGA640 3C/FC/8F series
>   - Cyclone-based control system
>   - FPGA for a partner company's frequency test system
>   - Matrix control for large LED displays
> - **Software development**
>   - Upgrade of DabitChe V5.41~V6.24
>   - DIBD Display V6.20 operating program
>   - Real-time solar inverter monitoring system
>   - Multilingual support system (Korean/English/Chinese/Japanese)
>   - SD card-based multimedia playback system
> - **Solar data processing technology**
>   - Real-time display of generation/cumulative amount/CO2 reduction
>   - Environmental sensor integration (irradiance, temperature, wind speed)
>   - Data collection and display for multiple inverters
>   - Generation efficiency analysis and monitoring system
>   - Remote monitoring with webcams

> [!summary]+ 2013
> **Major business results**
> - **Public sector/traffic**
>   - 2008 illegal parking enforcement project in a city for partner companies (LED display linked to a partner company's system and GPS)
>   - Third-party protocol matching work at an airport for a partner company
>   - AUK module LED display system, 4 rows × 64 columns, for a partner company
> - **Solar inverter integration systems**
>   - LED display system linked to an inverter maker's inverters (solar generation display at an elementary school)
>   - LED display linked to an inverter maker's solar inverters (1-phase/3-phase PCS communication)
>   - LED display linked to an inverter maker's solar inverters (GCI-RS422 protocol)
>   - LED display linked to an inverter maker's solar inverters (protocol development)
>   - Integrated communication protocol system for an inverter maker's solar gateway
> - **Other technology development**
>   - Telephone DTMF system (implemented for a partner company at a customer site)
>   - Water quality measurement status board system (partner company)
>   - MODBUS 485 communication master/slave LED display (partner company)
>   - Ticket boarding number transmitter system (LED display maker)
>
> **Technical development results**
> - **Inverter integration technology**
>   - Development of an inverter maker's inverter communication protocol (LED display protocol standard of another inverter maker)
>   - Implementation of an inverter maker's 1-phase/3-phase PCS communication protocol
>   - GCI-RS422 single-phase/three-phase inverter communication system for an inverter maker
>   - Development and optimization of an inverter maker's inverter protocol
>   - Integration of device-to-device communication protocols for an inverter maker's solar gateway
> - **Hardware development**
>   - Development and upgrade of the DIBD1xx2xx V5.32~V5.50 series
>   - More variants in the DIBD123/220/261/300 series
>   - Development of an LPC2138-based control system
>   - Support for large AUK module LED displays, 4 rows × 64 columns
> - **Communication technology**
>   - Support for MODBUS RTU 0x03/0x06 commands
>   - GPS-linked communication system for a partner company
>   - DTMF telephone control system
>   - Real-time data collection from multiple inverters
>   - Communication stability with CRC16 checksums
> - **Software development**
>   - DabitChe V5.51 water quality status display system for a city
>   - SignChe V2.9 operating program
>   - Multilingual support system (Korean/English/Vietnamese)
>   - Real-time solar generation monitoring system


> [!summary]+ 2012
> **Major business results**
> - **Environment/energy**
>   - LED display for energy readings with an MT4Y meter, 4M (current power/stored power)
>   - LED display for energy readings with an MT4Y meter, 9M (current power/stored power/CO2 reduction)
>   - Small hydropower status board in a city (linked to an inverter maker's inverters, 3x16)
>   - Mountain weather observation system for a weather agency (9M installed power/current power/daily power)
>   - Energy display board with an MT4Y meter, 4kW 2.1kWh 4TCO2
>   - Energy display board with an MT4Y meter, 9M 6W 4.1kW 4.1TCO2
> - **Commerce/retail**
>   - 1x6 LED display system for a partner company (based on DIBD500)
>   - 2x6 LED display showing year, month, day, hour, minute, and weekday, for an LED display maker
> - **Sports/culture**
>   - Baseball stadium scoreboard LED display for a partner company (2 rows × 7 columns, solar generation/CO2 reduction display)
> - **Public sector/environment**
>   - Power supply and demand status LED display for an LED display maker
>   - 1x128 LED display system for an LED display maker
>   - 3x7 full-color LED displays for export, 2 units, for an LED display maker
>   - LED display system for a chipmaker, with an LED display maker
> - **Industry/manufacturing**
>   - Overseas production status board for a partner company (4 rows × 20 columns, Vietnamese support)
>   - 3x54 3C LED display for a partner company
>   - FC 3x36 LED display for a partner company
>   - LED display linked to an inverter maker's inverters, for a partner company (Meas 3x16, current/stored/temperature)
>   - 12x5 DIBD260 LED displays, 3 units, for a partner company
>   - Inverter-linked LED display for a partner company (2 rows × 12 columns, Even Parity, energy display)
> - **Solar inverter integration systems**
>   - LED displays linked to an inverter maker's solar inverters (various configurations: 2M~10M, current/stored/temperature/CO2)
>   - LED display linked to an inverter maker's solar inverters (12M current/stored/temperature/CO2)
>   - LED displays linked to an inverter maker's solar inverters (1Y~3Y, various data displays)
>   - LED display linked to an inverter maker's solar inverters (with environmental sensors)
>   - LED display linked to an inverter maker's solar inverters
>
> **Technical development results**
> - **Inverter integration technology**
>   - Development of an inverter maker's PCS communication protocol (1-phase/3-phase)
>   - Development of an inverter maker's inverter communication protocol
>   - Development of an inverter maker's inverter communication protocol (single-phase/three-phase)
>   - Integration of an inverter maker's PCS communication protocol
>   - Development of an inverter maker's inverter communication protocol
> - **Hardware technology**
>   - Development of the DIBD500 series (based on NIOS II)
>   - Upgrade of the DIBD123/220/261 series
>   - Development of the DIBD125/225/265 series
>   - Development of the DIBD260/300 series
>   - MT4Y series integration technology
> - **Software development**
>   - Upgrade of DabitChe V3.x~V5.x
>   - Development of a Vietnamese input system
>   - Multilingual support system (Korean/English/Chinese/Japanese/Vietnamese)
>   - Real-time inverter data processing system
>   - Environmental sensor integration system
> - **Communication technology**
>   - Implementation of the Modbus RTU communication protocol
>   - RS485 multidrop communication system
>   - Better communication stability with CRC checksums
>   - Support for Even/Odd Parity
>   - Real-time data collection and display system

> [!summary]+ 2011
> **Major business results**
> - **Traffic/logistics**
>   - Overseas VMS traffic information system for a partner company
> - **Public sector**
>   - Environmental LED display for a city hall (LED display maker)
>   - Full-color LED display for a county office (LED display maker)
>   - Parking enforcement LED display in a city for a partner company (LED display maker)
> - **Environment/energy**
>   - Solar generation LED display for a media company (LED display maker)
>   - Solar generation LED display for a media company, phase 2 (LED display maker)
>   - LED display linked to an inverter maker's solar inverters (LED display maker)
>   - 10M solar system with an inverter maker's inverters (LED display maker)
>   - Power supply and demand status LED display (LED display maker)
> - **Sports/culture**
>   - Soccer stadium scoreboard LED display for a partner company
>   - Simple baseball score LED display for an LED display maker
>   - Baseball score LED display for an LED display maker
>   - Information LED display for a karaoke business (LED display maker)
> - **Industry/manufacturing**
>   - LED display linked to a PLC with 165 discrete signals, for a machinery company
>   - GLOFA PLC control system for an LED display maker
>   - Open/Close system to display discrete signals, for an LED display maker
>   - Discrete input display system for an LED display maker (5x5)
>   - Discrete input LED display, 1 row × 6 columns, for an LED display maker
>   - Sign system, 4 rows × 5 columns, for an LED display maker
> - **IT/technology development**
>   - 4-20mA integration system for an LED display maker (partner company)
>   - 4-20mA MT4Y system for an LED display maker
>   - Decibel measurement LED display for an LED display maker
>   - 10ms precision clock for an LED display maker
>   - Bicycle rental station information system for an LED display maker
>   - Full-color LED display, 6 rows × 20 columns, for an LED display maker
>   - 3x38 LED display for an LED display maker
>   - Full-color LED display, 4 rows × 6 columns, for an LED display maker
>   - SD 1x64 LED display for an LED display maker
>   - 7x12 full-color LED display for an LED display maker
> - **Other**
>   - LED display for export to an overseas market, for an LED display maker
>   - Display system for a customer, with an LED display maker

> [!summary]+ 2010
> **Major business results**
> - **Nuclear/energy**
>   - Parking control LED display at a nuclear power plant for a partner company
> - **Traffic/logistics**
>   - LED display at an airport for a partner company
>   - LED display for a highway operator, with a partner company
>   - LED display at a terminal for a partner company (11x56)
> - **Commerce/retail**
>   - LED display system at a department store
> - **Public sector/culture**
>   - Cremation reception status LED display for an electronics company (14x20)
>   - Information LED display at a church (partner company)
>   - LED display system at a training center (4x40, 16D)
>   - LED display for a county office, with a partner company
>   - Environmental LED displays in a county, 2 units, for a partner company
> - **Industry/manufacturing**
>   - LED display linked to a PLC with 165 discrete signals, for a machinery company
>   - LED display system for a partner company
>   - Production status LED display for a special steel maker, with a partner company
>   - LED display for a partner company
>   - Production status LED display for an auto parts maker, with a partner company
>   - Production status LED display for a partner company
> - **IT/technology development**
>   - ASC 16x16 font LED display for a partner company
>   - Ultrasonic-linked LED display for a partner company (4x63)
>   - CRC16 communication LED display for a partner company
>   - ModbusCRC16 LED display for a public research institute, with a partner company
>   - ADC integration system for an LED display maker
>   - DLE_CRC communication LED display for a partner company
>   - DV1 LED display with 255 discrete signals for an LED display maker
>   - AUK module LED display for a partner company
>   - Scheduled message system for a partner company
>   - Flowmeter integration system for a partner company
>   - Switch control system for a partner company
>   - Voice MP3 system for a partner company
>   - GPS integration system for a partner company
> - **Environment/energy**
>   - LED display linked to a watt-hour meter for a public IT agency
>   - BCD166 LED display for an LED display maker
>   - Weather information LED display at a local site for a partner company
>   - Solar generation LED display for a partner company (inverter maker)
>   - Solar generation LED display for a partner company (electronics company, middle school)
>   - Solar generation LED display for a partner company (research institute of a heavy-industry company)
>   - Solar generation LED display for a partner company (installed capacity/current/cumulative)
>   - Integration systems for various inverters (4 inverter makers)
> - **Finance/securities**
>   - Stock quote LED display for a partner company (2x96)
> - **Other systems**
>   - Large LED display for a partner company (1x226)
>   - LED display system for a partner company (6x26)
>   - MT4W status board communication system for an LED display maker
>   - HEX255 communication system
>   - LED display, 3 rows × 40 columns, for a partner company
>   - 12x5 LED displays, 3 units, for a partner company (260)
>   - PLC communication LED display for a manufacturer's plant, with a partner company (1x10)

> [!summary]+ 2009
> **Major business results**
> - **Public sector**
>   - Illegal parking enforcement LED display for a city hall (partner company)
>   - Parking LED display for a city vehicle registration office (partner company)
>   - Parking LED display in a city, 200 characters
>   - Illegal parking LED display in a city (partner company)
>   - Parking LED display in a city (partner company)
>   - Promotional LED display at a park for a county office
>   - Parking management LED displays in 2 districts (partner company)
>   - Illegal parking enforcement LED displays in 2 cities (partner company)
>   - Parking LED displays in 2 districts (partner company)
>   - GPS-linked parking LED display in a city (partner company)
>   - Parking LED display for a city (partner company)
>   - Parking LED display for a city (partner company)
>   - Environmental LED displays for a county office and a town, 2M2M2M2M, inverter-linked, 3M blinking (partner company)
>   - Information LED display for a fisheries cooperative (partner company)
>   - 4x14 LED display for a regional environment office (partner company)
>   - Solar LED display for a district office (partner company)
>   - Information LED display at an elementary school (partner company)
> - **Traffic/logistics**
>   - Traffic information LED display on a bridge (CDMA-linked)
>   - Parking LED display in a district (lighting company)
>   - Parking LED display in a district (lighting company)
>   - Facility management LED display at a sewage treatment plant (partner company)
>   - ITS system in a city (partner company)
>   - Parking guidance system with a supplier's new-type module (partner company)
>   - Parking guidance LED display at a university (partner company)
>   - Parking guidance LED display at a broadcaster (partner company)
>   - Parking guidance LED display at a stadium, phase 2 (partner company)
>   - Parking guidance system for a tech company (partner company)
>   - Traffic information LED display at an airport (partner company)
> - **Sports/culture**
>   - Scoreboard LED display at a baseball stadium
>   - Handball score LED display (partner company)
>   - Information LED display at a university (partner company)
>   - 4x40 LED display at a training center (partner company)
> - **Environment/energy**
>   - Generation LED display for a solar power plant (partner company)
>   - Solar generation status LED display (partner company)
>   - Solar generation LED display (inverter maker)
>   - Solar power plant monitoring LED display (partner company)
>   - Solar and fuel cell LED display (partner company)
>   - Environmental data LED display (LED display maker)
>   - Solar LED display at a stadium (partner company)
>   - Solar LED displays at an elementary school, 2 sites (partner company)
>   - Solar LED display for a building materials company, inverter-linked (partner company)
>   - Solar display at a middle school, 2M2M2M2M, inverter-linked, 3M blinking (partner company)
>   - Solar display at an elementary school, 2M2M2M2M, inverter-linked (partner company)
>   - Solar display at a mountain site, inverter-linked, 3M3M3M (partner company)
>   - Solar displays at a middle school and others, 4 sites, 2M2M2M2M, inverter-linked (partner company)
>   - Solar display for a city, 3M2M2M, webcam (partner company)
>   - Solar display at a polytechnic college, inverter-linked (partner company)
>   - Solar power plant display, inverter-linked, cumulative M2P0-current M1P0 (partner company)
>   - Solar LED display showing current 2, annual 2 (partner company)
>   - Solar display current_cumulative_CO2 2-2-2-16D (partner company)
>   - Solar display of annual_current generation (partner company)
>   - Solar LED display for a construction materials company (partner company)
>   - Electric vehicle charging status LED display (partner company)
>   - Solar power plant display current*annual*temperature_irradiance (partner company)
>   - Solar display at a high school, inverter-linked, 2M2M3M (partner company)
>   - Solar display at a high school, inverter-linked, 2M2M2M2M (partner company)
>   - Solar displays for a building materials company, inverter-linked, Max 5 sites (partner company)
>   - Inverter-linked solar LED display (partner company)
>   - Solar thermal LED display annual_current (partner company)
> - **Nuclear/energy**
>   - Information LED display at a nuclear power plant (partner company)
>   - LED display at a nuclear facility (partner company)
> - **Industry/manufacturing**
>   - Production status LED display for a steel company (in a city)
>   - LED display linked to an inverter maker's inverters (partner company)
>   - LED display linked to PLC discrete signals (machinery company)
>   - Weather data LED display (partner company)
>   - LED display for a research institute of a heavy-industry company (partner company)
>   - LED display for a telecom company (partner company)
>   - ADC 1x6x2 LED display in a city (partner company)
> - **IT/technology development**
>   - LED display linked to an ultrasonic distance sensor (partner company)
>   - Message display system linked to discrete signals (LED display maker)
>   - Scheduled message system with parallel discrete signals (partner company)
>   - LED display with AUK modules (partner company)
>   - Parking guidance LED display system (partner company)
>   - Messages linked to discrete inputs for a gas utility (partner company)
>   - Wave-pattern LED display for an AGV system (partner company)
>   - Loading system LED display (partner company)
> - **Communication/network**
>   - 8x20 LED display system (partner company)
>   - 4x36, 3x28 LED display systems (partner company)
>   - 4x36 LED display (partner company)
>   - 2x30 LED display with time on the right (partner company)
>   - 2x35 LED display (partner company)
>   - Relay2-Reset2 LED display (partner company)
>   - AD module LED display, 1 row × 7 columns (partner company)
> - **Industrial systems**
>   - 3x60 third-party 4D LED display (partner company)
>   - Illegal parking LED display, 1 row × 8 columns (partner company)
>   - Third-party 4D LED display, 7 rows × 12 columns (partner company)
> - **Other**
>   - 8x12 LED display system (partner company)
>   - 2x5 LED display (partner company)
>   - 4x32 LED display (partner company)
>   - Parking lot information LED display (electronics company)
>   - 14x20 LED display (electronics company)
>   - 6x12 LED display (partner company)
>   - 2x32 LED display (partner company)
>   - 5x8 LED display (partner company)
>   - LED display in a city (partner company)
>   - Parking guidance LED display (partner company)


> [!summary]+ 2008
> **Major business results**
> - **Automotive/industry**
>   - Production status LED display at an overseas carmaker plant
>   - Information LED display at a military maintenance depot (partner company)
>   - Upgrade of a speed measurement system for a tire maker
> - **Traffic/logistics**
>   - Subway information LED display system
>   - Bus information LED display in a city (partner company)
>   - Traffic information LED displays in 2 cities (partner company)
>   - ITS system at a university
>   - Traffic information LED display in a city (partner company)
>   - Traffic safety LED display on an island (partner company)
>   - Traffic information LED display at a tunnel
> - **Public sector**
>   - Illegal parking enforcement LED display in a town (partner company)
>   - Illegal parking enforcement LED display in a city (partner company)
>   - Parking management LED displays in 2 districts (partner company)
>   - Water quality measurement LED display in a town
> - **Commerce/retail**
>   - Information LED display at a hypermarket
>   - Information LED display at a department store
>   - Information LED display at a commercial facility
> - **Finance**
>   - Financial information LED display at a bank branch (partner company)
> - **Environment/energy**
>   - Generation LED displays for solar power plants (multiple projects)
>   - Operation status LED display at a sewage treatment plant
>   - Facility management LED display at a sewage treatment plant (partner company)
> - **Medical/research**
>   - LED display at a university research facility (partner company)
>   - Research LED display for a customer (partner company)
> - **Sports/culture**
>   - Game information LED display at a gymnasium
> - **Manufacturing/technology**
>   - Electric oven control system for a partner company
>   - Process management LED display for a partner company
>   - Production status LED display at a manufacturing plant (upgrade)
>   - LED display system for a large corporation
> - **Other technology development**
>   - Vehicle guidance LED display system (partner company)
>   - LED displays linked to speed sensors, 30 units (partner company)
>   - Relay control system (LED display maker)
>   - Ultrasonic-linked LED display (partner company)
>   - Circular LED display system (lighting company)
>   - Wireless LAN-linked LED display system
>   - PLC-linked LED display system
>   - LED display for export to an overseas market

> [!summary]+ 2007
> **Major business results**
> - **Finance/securities**
>   - Integrated control LED display at a bank
>   - Stock quote LED display at a securities firm branch
> - **Traffic/logistics**
>   - Passenger information LED display at a coastal ferry terminal
>   - Safe speed LED display on a bridge
>   - Parking system LED display at a stadium
>   - Safe speed LED display for a highway operator
>   - Parking system LED display at a broadcaster
>   - Intelligent transportation system (ITS) project, phase 2
>   - Overseas traffic information system (export)
> - **Public sector**
>   - Illegal parking enforcement LED display for a district office
>   - Illegal parking enforcement LED display for a district office
>   - Illegal parking enforcement LED display for a city
>   - CDMA information LED display for a county office
>   - Illegal parking enforcement LED display for a city
>   - Information LED display for a water resources agency
>   - Information LED display for a provincial government office
>   - GPS-linked LED display in a city
>   - Parking enforcement LED display in a district
>   - Parking enforcement LED display in a city
>   - Illegal parking enforcement LED display for a city
>   - Banner LED display for a county
>   - Environmental data information LED display for a district office
>   - Information LED display at a sewage treatment plant
>   - Illegal parking enforcement LED display for a city hall (partner company)
>   - Parking LED display in a city
>   - Parking LED display for a city (extension)
> - **Commerce/retail**
>   - Information LED display at a department store
>   - Auction LED display for a produce wholesaler at a wholesale market
>   - Auction LED display for an agricultural cooperative at a wholesale market
>   - Information LED display at a model house
> - **Industry/manufacturing**
>   - Speed test LED display for a tire maker
>   - Weather information LED display for a heavy-industry company
>   - Production status LED display at a manufacturing plant
>   - Ship fueling cost LED display in a city
> - **Culture/sports**
>   - Scoreboard LED display at a baseball stadium
>   - LED display at an exhibition center, 1 row × 76 columns
>   - Information LED display at a public park
>   - Information LED display at a cultural village
> - **IT/technology development**
>   - Development of a VB-OCX control system
>   - LED display system linked to speed sensors (partner company)
>   - GPS-linked LED display system (in a city)
>   - CDMA-linked LED display system (for a county office)
> - **Lottery/games**
>   - Lottery information LED display system
> - **Other**
>   - Information LED display at a golf course
>   - LED display at a call center (phase 2)
>   - Information LED display at a nuclear power PR center
>   - Weather forecast tower for railway broadcasting at a train station
>   - LED display system for a partner company
>   - Bus information system (BIS) project in a city
>
> **Technical development results**
> - **Communication technology**
>   - Development of a CDMA wireless communication integration system
>   - LED display system linked to GPS location data
>   - Upgrade of RS232/485 communication protocols
> - **Software development**
>   - Development of a VB-OCX ActiveX control
>   - Real-time data processing system
>   - Development of remote monitoring and control software
> - **Hardware technology**
>   - Improvement of high-resolution LED module technology
>   - Waterproof/dustproof system with stronger durability
>   - Development of a low-power control system

> [!summary]+ 2006
> **Major business results**
> - **Public sector**
>   - Illegal parking enforcement LED display system for a city
>   - Illegal parking enforcement LED display system for a city
>   - Illegal parking enforcement LED display system for a city
>   - Illegal parking enforcement LED display system for a city
>   - LED display system for a partner company in a city
>   - LED display system for a partner company in a city
>   - LED display system for a city hall
> - **Traffic/logistics**
>   - Subway information LED display system
>   - In-tunnel information LED display at a tunnel
>   - 5-day parking management system
> - **Industry/manufacturing**
>   - Production status LED display for a steelmaker
>   - Industrial equalizer control system
>   - Equalizer system in a city
>   - Industrial control LED display (partner company)
> - **Tourism/leisure**
>   - Scoreboard LED display at a golf course
>   - Tourist information LED display in a mountain area
> - **Elections/promotion**
>   - Election D-Day countdown LED display
>   - Banner LED display systems (multiple projects)
> - **Education/weather**
>   - School weather information LED display system
> - **Other technology development**
>   - ARM-based remote control system
>   - LED display system linked to speed sensors
>   - Vehicle LED display system
>   - Sound spectrum analysis system
>   - 2x10 LED display system for a partner company
>
> **Technical development results**
> - **Hardware technology**
>   - Development of an ARM-based control system (44B processor)
>   - M251A/M251B/M280A microcontroller system
>   - EPM570/EPM1270 FPGA-based control system
>   - AVR microcontroller development environment
> - **Communication technology**
>   - Development of RS232/485 communication protocols
>   - ezTCP network communication system
>   - CDMA modem integration technology
>   - Wireless communication interface
> - **Sensor/control technology**
>   - Laser sensor integration system
>   - Speed sensor integration technology
>   - PLC integration system (165 discrete signals)
>   - Relay control system
> - **Software development**
>   - Development of an LED display operating program
>   - Real-time data processing system
>   - FAT file system support
>   - Protocol communication software



---
