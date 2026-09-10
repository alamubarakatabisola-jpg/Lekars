import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'musical-instrument-repair',
    name: 'Musical Instrument Repair',
    shortDescription: 'Comprehensive diagnostic and precision repair services for brass, woodwind, stringed, and acoustic instruments.',
    fullDescription: 'Our master craftsmen handle complete structural, mechanical, and electronic repairs for all classes of musical instruments. From crack repairs to key alignment, we restore instruments to factory precision.',
    iconName: 'Wrench',
    details: [
      'Comprehensive mechanical diagnostic',
      'Structural crack & body integrity restoration',
      'Hardware replacement with genuine parts',
      'Precision tuning & acoustic calibration'
    ],
    turnaroundTime: '24 - 48 Hours',
    recommendedFor: 'Performers, Schools & Orchestra Musicians'
  },
  {
    id: 'guitar-repair-maintenance',
    name: 'Guitar Repair & Maintenance',
    shortDescription: 'Professional setup, fret dressing, pickup replacement, wiring repairs, and structural acoustic/electric guitar work.',
    fullDescription: 'Full setup service tailored to your playstyle. Includes truss rod adjustment, action lowering, intonation setup, fret levelling/crowning, pickup upgrades, pot cleaning, and output jack soldering.',
    iconName: 'Guitar',
    details: [
      'Complete Fret Levelling & Crown Dressing',
      'Truss Rod & Action Height Optimization',
      'Custom Electronics Wiring & Coil Splitting',
      'Nut & Saddle Crafting (Bone/Tusq)',
      'Bridge Re-gluing & Finish Touch-ups'
    ],
    turnaroundTime: '1 - 3 Days',
    recommendedFor: 'Electric, Bass, and Acoustic Guitarists'
  },
  {
    id: 'keyboard-piano-servicing',
    name: 'Keyboard / Piano Servicing',
    shortDescription: 'Key contact pad cleaning, mainboard repairs, weighted action calibration, power supply fixes, and acoustic piano tuning.',
    fullDescription: 'Expert repairs for digital synthesizers, stage pianos, MIDI controllers, and acoustic pianos. We fix unresponsive keys, broken keybeds, noisy outputs, LCD display issues, and power failures.',
    iconName: 'Piano',
    details: [
      'Conductive Rubber Keypad Cleaning & Replacement',
      'Hammer Action Mechanism Calibration',
      'Power Board & Capacitor Overhauls',
      'Firmware Updates & Mainboard Diagnostics',
      'Acoustic Piano Tuning & Action Regulation'
    ],
    turnaroundTime: '2 - 4 Days',
    recommendedFor: 'Churches, Recording Studios & Keyboardists'
  },
  {
    id: 'drum-percussion-maintenance',
    name: 'Drum & Percussion Maintenance',
    shortDescription: 'Drumhead replacement, bearing edge restoration, hardware overhaul, snare strainers, and acoustic shell tuning.',
    fullDescription: 'Keep your rhythm section tight. We handle acoustic drum shell re-wrapping, bearing edge recutting, hardware stripping & lubrication, electronic drum pad sensor repair, and cymbal crack drilling.',
    iconName: 'Drum',
    details: [
      'Drum Shell Bearing Edge Resurfacing',
      'Snare Wire & Strainer Mechanism Overhaul',
      'Electronic E-Drum Mesh Pad & Piezo Repair',
      'Hardware Lug Threading & Tension Tuning',
      'Percussion Hardware Restorations'
    ],
    turnaroundTime: '1 - 2 Days',
    recommendedFor: 'Drummers, Bands & Event Venues'
  },
  {
    id: 'amplifier-repair',
    name: 'Amplifier Repair',
    shortDescription: 'Tube & solid-state amplifier diagnostics, re-tubing, bias setting, transformer repair, and hum/noise reduction.',
    fullDescription: 'Specialized amplifier engineering for valve/tube and transistor amplifiers. We eliminate crackles, replace blown transformers, recap vintage amplifiers, and re-bias output stages.',
    iconName: 'Radio',
    details: [
      'Tube / Valve Testing & Precision Re-biasing',
      'Filter Capacitor Replacement (Recapping)',
      'Output Transformer Repair & Replacement',
      'Potentiometer & Jack De-oxidization',
      'Thermal Protection & Heat Sink Service'
    ],
    turnaroundTime: '2 - 5 Days',
    recommendedFor: 'Guitarists, Bassists & Audio Technicians'
  },
  {
    id: 'speaker-audio-equipment-repair',
    name: 'Speaker & Audio Equipment Repair',
    shortDescription: 'Speaker re-coning, voice coil replacements, crossover network repair, powered monitor servicing, and cabinet restoration.',
    fullDescription: 'Detailed restoration for studio monitors, PA subwoofers, line array speakers, and passive enclosures. We fix distorted sound, dead drivers, burned voice coils, and fried crossover boards.',
    iconName: 'Volume2',
    details: [
      'Speaker Cone & Foam Surround Replacement',
      'High-Power Voice Coil Rewinding',
      'Passive Crossover Capacitor & Inductor Repair',
      'Active Monitor Power Module Diagnostics',
      'Enclosure Vibration Dampening'
    ],
    turnaroundTime: '2 - 4 Days',
    recommendedFor: 'Clubs, Event Centers & Live Sound Engineers'
  },
  {
    id: 'microphone-repair-servicing',
    name: 'Microphone Repair & Servicing',
    shortDescription: 'Capsule cleaning, condenser element restoration, ribbon replacement, wireless transmitter repair, and XLR recabling.',
    fullDescription: 'Precision micro-engineering for dynamic, ribbon, and large-diaphragm condenser microphones. We resolve phantom power dropouts, noisy capsules, damaged grilles, and wireless frequency dropouts.',
    iconName: 'Mic',
    details: [
      'Microphone Capsule De-contamination & Cleaning',
      'Dynamic & Condenser Element Replacement',
      'XLR Connector Resoldering & Strain Relief',
      'Wireless Bodypack Antenna & Battery Board Repair',
      'Pop Filter & Mesh Grille Sanitation'
    ],
    turnaroundTime: '1 - 2 Days',
    recommendedFor: 'Vocalists, Podcasters & Broadcasters'
  },
  {
    id: 'audio-equipment-troubleshooting',
    name: 'Audio Equipment Troubleshooting',
    shortDescription: 'Deep diagnostic analysis for complex audio signal chain issues, ground loops, latency, and intermittent signal drops.',
    fullDescription: 'Struggling with unidentifiable hums, signal degradation, or system cutouts? Our sound engineers perform comprehensive signal tracing, impedance matching, and ground loop elimination.',
    iconName: 'Activity',
    details: [
      'Signal Chain Tracing & Oscilloscope Analysis',
      'Ground Loop & Electromagnetic Interference Isolation',
      'Balanced & Unbalanced Line Level Calibration',
      'Phantom Power Volt Standard Check',
      'Cable Integrity & Impedance Testing'
    ],
    turnaroundTime: '24 Hours',
    recommendedFor: 'Sound Technicians, Places of Worship & Studios'
  },
  {
    id: 'sound-system-installation',
    name: 'Sound System Installation',
    shortDescription: 'Professional acoustic assessment, system design, rack wiring, speaker rigging, and room EQ optimization.',
    fullDescription: 'Turnkey audio engineering solutions for auditoriums, houses of worship, recording facilities, and live venues. We design, wire, rig, and calibrate complete sound reinforcement systems.',
    iconName: 'Sliders',
    details: [
      'Acoustic Measurement & Speaker Placement',
      'Custom Rack Mount Wiring & Cable Management',
      'DSP (Digital Signal Processor) & EQ Tuning',
      'Stage Snake & Wall Plate Patch Installation',
      'System Operator Training & Documentation'
    ],
    turnaroundTime: 'Custom Project Timeline',
    recommendedFor: 'Churches, Concert Halls & Corporate Venues'
  },
  {
    id: 'musical-equipment-maintenance',
    name: 'Musical Equipment Maintenance',
    shortDescription: 'Preventative care packages, deep cleaning, component lubrication, and safety checks for all gear.',
    fullDescription: 'Extend the lifespan of your valuable gear. Regular preventative maintenance protects against dust accumulation, corrosion, humidity damage, and unexpected failure right before a gig.',
    iconName: 'ShieldCheck',
    details: [
      'Deep Chemical Cleaning & Oxide Removal',
      'Potentiometer & Fader Dust Sealing',
      'Thermal Paste Refresh on Power Amplifiers',
      'Cable Strain Stress Checks & Re-labeling',
      'Flight Case Integrity & Foam Fitting'
    ],
    turnaroundTime: '1 Day Service',
    recommendedFor: 'Touring Bands, Rental Houses & Music Schools'
  },
  {
    id: 'studio-equipment-servicing',
    name: 'Studio Equipment Servicing',
    shortDescription: 'Mixing console calibration, outboard gear recap, audio interface repairs, and patchbay wiring restoration.',
    fullDescription: 'Precision calibration for analog mixers, outboard preamps, compressors, audio interfaces, and tape machines. We eliminate noisy faders, channel imbalances, and digital clocking glitches.',
    iconName: 'Disc',
    details: [
      'Analog Console Channel Strip Servicing',
      'Motorized Fader Cleaning & Track Alignment',
      'Audio Interface Converter Board Repairs',
      'Outboard Tube & Solid State Preamp Recapping',
      'Bantam / TT Patchbay Contact Restoration'
    ],
    turnaroundTime: '3 - 5 Days',
    recommendedFor: 'Commercial & Home Recording Engineers'
  },
  {
    id: 'general-musical-engineering',
    name: 'General Musical Engineering',
    shortDescription: 'Custom audio modifications, custom pedalboard builds, instrument retrofits, and specialized technical solutions.',
    fullDescription: 'Have a unique audio request or custom instrument modification? Our musical engineering team builds custom switching systems, pedalboard power isolation solutions, and specialized circuit mods.',
    iconName: 'Cpu',
    details: [
      'Custom Pedalboard Patch & Power Rigging',
      'Instrument Modification (True Bypass, Pickup Mods)',
      'Custom Audio Snake & Splitter Box Fabrication',
      'Hardware Retrofitting & Vintage Gear Modification',
      'Prototyping & Sound Solution Engineering'
    ],
    turnaroundTime: 'Project Based',
    recommendedFor: 'Innovators, Pro Guitarists & Audio Creators'
  }
];
