export const util = {
    async days(){
        const _default = await import('moment'); 
        const moment = _default.default;
        const getDaysObject = [];
        let date = null;
        for(let d = 1 ; d < 7 ; d++){
            date = moment().add(d, 'days');
            getDaysObject.push({
                value: date.format('L'),
                text: date.calendar().includes('Tomorrow') ? 'Tomorrow' : date.format('ll')
            })   
        }
        return getDaysObject;
    },
    async serviceTime(startTime, endTime){
        const _default = await import('moment');
        const moment = _default.default;
        const getTimes = [];
        let _startTime = moment(startTime, 'HH:mm');
        let _endTime = moment(endTime, 'HH:mm');
        let _prevStart = {};
        
        if(_endTime.isBefore(_startTime))
            _endTime.add(1, 'day')
        
        while(_startTime <= _endTime){
            _prevStart = _startTime.clone();
            _startTime.add(60, 'minutes')
            getTimes.push({
                value: `${_prevStart.valueOf()}-${_startTime.valueOf()}`,
                text: `${_prevStart.format('hh:mm A')} - ${_startTime.format('hh:mm A')}`
            })
        }
        return getTimes;
    },
    getPricingOnCC(engines, cc){
        let priceAndDuration = { cost: 0, duration: 0 };
        for(let engine of engines){
            const { cost, duration } = engine;
            if(engine.cc instanceof Array){
                engine.cc.includes(cc) && (priceAndDuration = { cost, duration })
            }
            
            if(engine.cc instanceof Number){
                engine.cc === cc && (priceAndDuration = { cost, duration })
            }
        }
        return priceAndDuration
    },
    getWorkShop(){
        return [
            {
                name: 'delhi',
                addresses: [
                    { name: 'NCR Motorcycles', phone: '9911464687', location: 'New Delhi', coordinates: { lat: 28.569655, lng: 77.282428 }, full_address: 'R-282, Street No. 7, near Islah Masjid, Jogabai Extension, Okhla, New Delhi, Delhi 110025' },
                    { name: 'ARV Brother', phone: '981031066', location: 'New Delhi', coordinates: { lat: 28.502958, lng: 77.247521 }, full_address: 'E-7C/611A, Ratiya Marg, opp. Bangali Sweets, Sangam Vihar, New Delhi, Delhi 110080' },
                    { name: 'Bike Center', phone: '9811389158', location: 'Delhi', coordinates: { lat: 28.671198, lng: 77.174808 }, full_address: '5-E Shahjada Bagh, Near TVS Showroom, Industrial Area, Inderlok, Delhi 110007' },
                    { name: 'Yadav Scooters and Service Center', phone: '01125031544', location: 'New Delhi', coordinates: { lat: 28.595199, lng: 77.080518 }, full_address: 'RZ-L-1, Main Road, Palam - Dabri Marg, near Shiv Vani Model School, Mahavir Enclave I, Mahavir Enclave, New Delhi, Delhi 110025' },
                    { name: 'Yash Bike Service Center', phone: '8826587429', location: 'Delhi', coordinates: { lat: 28.703818, lng: 77.080611 }, full_address: 'G-101, Dharam Market, Kanjhawala Rd, Krishan Vihar, Delhi 110025' },
                    { name: 'Sachin Automobiles', phone: '8802425389', location: 'Delhi', coordinates: { lat: 28.712534, lng: 77.082883 }, full_address: 'X-1/66, Main Rithala Road, Near Meera Devi Public School, Budh Vihar Phase I, Jharoda Kalan, Majraa, Delhi 110025' },
                    { name: 'Balaji Motor Bike Center', phone: '9811088239', location: 'New Delhi', coordinates: { lat: 28.565822, lng: 77.181371 }, full_address: 'Shop No. 9, Vivekanand Marg, Sector 1, RK Puram, New Delhi, Delhi 110025' }
                ]
            }
        ]
    },
    getServices(){
        return [
            {
                _id: '763ad187f15faf8c0a7384d1',
                name: 'General Service',
                engine_cc: [
                    {
                        cc: [100, 110],
                        cost: 499,
                        duration: 75
                    },
                    {
                        cc: 125,
                        cost: 599,
                        duration: 75
                    },
                    {
                        cc: [150, 160],
                        cost: 699,
                        duration: 90
                    },
                    {
                        cc: [180, 200, 220],
                        cost: 999,
                        duration: 105
                    },
                    {
                        cc: 220,
                        cost: 1299,
                        duration: 120
                    },
                    {
                        cc: 400,
                        cost: 1899,
                        duration: 180
                    },
                ],
                specs: {
                    warranty: 'Valid Warranty in a number of weeks: 1000KMs or 1 month',
                    recommended: 'The recommended number of KM / Number of Months for repeat service: Every 5000KMs or 6 Months',
                    services_included: [
                        'Engine oil replacement (Regular)',
                        'Oil strainer cleaning',
                        'Air filter cleaning',
                        'Spark plug cleaning & Testing',
                        'Drive chain cleaning & lubrication',
                        'Drive chain slackness adjustment',
                        'Battery testing',
                        'Fasteners tightening',
                        'ABC (Accelerator, Brake and Clutch cable adjustment)',
                        'General Electrical and mechanical inspection',
                        'Full wash'         
                    ]
                }
            },
            {
                _id: '26fc5059e7c4ccf7f995726c',
                name: 'Complete/Full Service',
                engine_cc: [
                    {
                        cc: [100, 110],
                        cost: 899,
                        duration: 120
                    },
                    {
                        cc: 125,
                        cost:999,
                        duration: 120
                    },
                    {
                        cc: [150, 160],
                        cost: 1299,
                        duration: 150
                    },
                    {
                        cc: [180, 200, 220],
                        cost: 1699,
                        duration: 150
                    },
                    {
                        cc: 220,
                        cost: 1899,
                        duration: 180
                    },
                    {
                        cc: 400,
                        cost: 2000,
                        duration: 200
                    },
                ],
                specs: {
                    warranty: 'Valid Warranty in a number of weeks: 1000KMs or 1 month',
                    recommended: 'The recommended number of KM / Number of Months for repeat service: Every 10000KMs or 12 Months',
                    services_included: [
                        'Engine oil replacement (Regular)', 
                        'Oil strainer replacement', 
                        'Carburetor cleaning', 
                        'Air filter replacement', 
                        'Spark plug replacement', 
                        'Coolant replacement', 
                        'Brake oil replacement', 
                        'Brake drum/pad service', 
                        'Throttle body cleaning', 
                        'Tappet checking & adjustment', 
                        'Idle speed / CO% checking & adjustment', 
                        'Fuel line checking', 
                        'Fuel filter cleaning', 
                        'Suspension checking & adjustment', 
                        'Drive chain cleaning & lubrication', 
                        'Drive chain slackness adjustment', 
                        'Wiring harness checking', 
                        'Tire tread wear checking', 
                        'Steering play adjustment', 
                        'Main stand & side stand pin greasing', 
                        'Headlight checking & Focus adjustment', 
                        'Wiring harness checking', 
                        'Battery testing', 
                        'Fasteners tightening', 
                        'General lubrication', 
                        'ABC (Accelerator, Brake and Clutch cable adjustment)', 
                        'Full vehicle wash'
                    ]
                }
            },
            {
                _id: 'adac3310c7f63ab4cecfc01b',
                name: 'Bike Spa & Cleaning',
                engine_cc: [
                    {
                        cc: [100, 110],
                        cost: 149,
                        duration: 30
                    },
                    {
                        cc: 125,
                        cost: 149,
                        duration: 30
                    },
                    {
                        cc: [150, 160],
                        cost: 149,
                        duration: 30
                    },
                    {
                        cc: [180, 200, 220],
                        cost: 149,
                        duration: 30
                    },
                    {
                        cc: 220,
                        cost: 149,
                        duration: 30
                    },
                    {
                        cc: 400,
                        cost: 149,
                        duration: 30
                    },
                ],
                specs: {
                    warranty: '',
                    recommended: '',
                    services_included: [
                        'Outer body Wash',
                        'Underbody wash',
                        'Complete Dry/foam wash'
                    ]
                }
            },
            {
                _id: '72ffd22c3df85c570d471dcc',
                name: 'Inspection (General Service Inspection)',
                engine_cc: [
                    {
                        cc: [100, 110],
                        cost: 149,
                        duration: '30-60'
                    },
                    {
                        cc: 125,
                        cost: 149,
                        duration: '30-60'
                    },
                    {
                        cc: [150, 160],
                        cost: 149,
                        duration: '30-60'
                    },
                    {
                        cc: [180, 200, 220],
                        cost: 149,
                        duration: '30-60'
                    },
                    {
                        cc: 220,
                        cost: 149,
                        duration: '30-60'
                    },
                    {
                        cc: 400,
                        cost: 149,
                        duration: '30-60'
                    }
                ],
                specs: {
                    warranty: '',
                    recommended: '',
                    services_included: [
                        'Complete inspection',
                        'General Mechanical & electrical check up',
                        'Service/repair recommendations (Flexible)',
                        'Service add ons based on Inspection'
                    ]
                }
            }
        ]
    }
}