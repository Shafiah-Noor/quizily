const biologyQuestions = [
 { q: "Powerhouse of cell?", o: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], a: "Mitochondria" },
  { q: "Basic unit of life?", o: ["Atom", "Cell", "Organ", "Tissue"], a: "Cell" },
  { q: "Largest organ?", o: ["Liver", "Skin", "Brain", "Heart"], a: "Skin" },
  { q: "Blood pH?", o: ["6.5", "7.4", "8", "5"], a: "7.4" },
  { q: "DNA full form?", o: ["Deoxyribo Nucleic Acid", "RNA", "None", "Both"], a: "Deoxyribo Nucleic Acid" },
  { q: "Respiration occurs in?", o: ["Nucleus", "Mitochondria", "Golgi", "Ribosome"], a: "Mitochondria" },
  { q: "Gas for respiration?", o: ["Oxygen", "CO2", "Nitrogen", "Hydrogen"], a: "Oxygen" },
  { q: "Brain for thinking?", o: ["Cerebrum", "Cerebellum", "Medulla", "Spinal"], a: "Cerebrum" },
  { q: "Kidney function?", o: ["Filtration", "Digestion", "Breathing", "Circulation"], a: "Filtration" },
  { q: "Vitamin for vision?", o: ["A", "B", "C", "D"], a: "A" },
  { q: "Smallest bone?", o: ["Femur", "Stapes", "Tibia", "Ulna"], a: "Stapes" },
  { q: "Heart chambers?", o: ["2", "3", "4", "5"], a: "4" },
  { q: "Universal donor?", o: ["A", "B", "AB", "O"], a: "O" },
  { q: "Universal recipient?", o: ["A", "B", "AB", "O"], a: "AB" },
  { q: "Blood group discovered by?", o: ["Landsteiner", "Newton", "Darwin", "Einstein"], a: "Landsteiner" },
  { q: "Enzyme nature?", o: ["Protein", "Lipid", "Carb", "DNA"], a: "Protein" },
  { q: "Plant food process?", o: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], a: "Photosynthesis" },
  { q: "Green pigment?", o: ["Chlorophyll", "Hemoglobin", "Melanin", "Carotene"], a: "Chlorophyll" },
  { q: "Cell membrane?", o: ["Permeable", "Semi-permeable", "Rigid", "None"], a: "Semi-permeable" },
  { q: "Human temp?", o: ["36", "37", "38", "39"], a: "37" },
  { q: "Bone cells?", o: ["Osteocytes", "Neurons", "RBC", "WBC"], a: "Osteocytes" },
  { q: "RBC life?", o: ["90", "120", "150", "60"], a: "120" },
  { q: "WBC function?", o: ["Defense", "Transport", "Digestion", "Respiration"], a: "Defense" },
  { q: "Platelets role?", o: ["Clotting", "Breathing", "Digestion", "Circulation"], a: "Clotting" },
  { q: "Liver function?", o: ["Detox", "Breathing", "Thinking", "Movement"], a: "Detox" },
  { q: "Pancreas hormone?", o: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"], a: "Insulin" },
  { q: "Kidney unit?", o: ["Neuron", "Nephron", "Cell", "Tissue"], a: "Nephron" },
  { q: "Photosynthesis site?", o: ["Mitochondria", "Chloroplast", "Nucleus", "Golgi"], a: "Chloroplast" },
  { q: "Protein unit?", o: ["Amino acid", "Glucose", "Fatty acid", "DNA"], a: "Amino acid" },
  { q: "Carb unit?", o: ["Glucose", "Amino acid", "Fat", "Protein"], a: "Glucose" },
  { q: "Fat unit?", o: ["Fatty acid", "Glucose", "Protein", "DNA"], a: "Fatty acid" },
  { q: "Cell control center?", o: ["Nucleus", "Ribosome", "Golgi", "Mito"], a: "Nucleus" },
  { q: "Plant cell wall?", o: ["Cellulose", "Protein", "Fat", "DNA"], a: "Cellulose" },
  { q: "Genetics father?", o: ["Mendel", "Darwin", "Newton", "Einstein"], a: "Mendel" },
  { q: "Evolution theory?", o: ["Darwin", "Mendel", "Newton", "Pasteur"], a: "Darwin" },
  { q: "Vaccine father?", o: ["Jenner", "Pasteur", "Darwin", "Einstein"], a: "Jenner" },
  { q: "Blood filter organ?", o: ["Kidney", "Heart", "Brain", "Liver"], a: "Kidney" },
  { q: "Breathing organ?", o: ["Lungs", "Heart", "Brain", "Liver"], a: "Lungs" },
  { q: "Circulation organ?", o: ["Heart", "Brain", "Liver", "Kidney"], a: "Heart" },
  { q: "Digestion organ?", o: ["Stomach", "Heart", "Brain", "Kidney"], a: "Stomach" },
  { q: "Muscle type?", o: ["Voluntary", "Involuntary", "Both", "None"], a: "Both" },
  { q: "Neuron function?", o: ["Signal", "Digestion", "Breathing", "Circulation"], a: "Signal" },
  { q: "Eye part?", o: ["Retina", "Liver", "Heart", "Kidney"], a: "Retina" },
  { q: "Ear part?", o: ["Cochlea", "Heart", "Brain", "Liver"], a: "Cochlea" },
  { q: "Taste organ?", o: ["Tongue", "Eye", "Ear", "Skin"], a: "Tongue" },
  { q: "Smell organ?", o: ["Nose", "Eye", "Ear", "Skin"], a: "Nose" },
  { q: "Skin function?", o: ["Protection", "Thinking", "Breathing", "Digestion"], a: "Protection" },
  { q: "Vitamin D source?", o: ["Sunlight", "Food", "Water", "Air"], a: "Sunlight" },
  { q: "Iron role?", o: ["Hemoglobin", "Bone", "Skin", "Eye"], a: "Hemoglobin" },
  { q: "Calcium role?", o: ["Bones", "Blood", "Skin", "Hair"], a: "Bones" },
  { q: "Protein source?", o: ["Egg", "Rice", "Sugar", "Salt"], a: "Egg" },
  { q: "Carb source?", o: ["Rice", "Egg", "Meat", "Milk"], a: "Rice" },
  { q: "Fat source?", o: ["Oil", "Rice", "Egg", "Water"], a: "Oil" },
  { q: "Water function?", o: ["Transport", "Thinking", "Breathing", "Digestion"], a: "Transport" },
  { q: "Enzyme example?", o: ["Amylase", "Glucose", "DNA", "Fat"], a: "Amylase" },
  { q: "Hormone type?", o: ["Chemical", "Physical", "Solid", "Gas"], a: "Chemical" },
  { q: "Cell division?", o: ["Mitosis", "Respiration", "Digestion", "Breathing"], a: "Mitosis" },
  { q: "Reproduction type?", o: ["Sexual", "Asexual", "Both", "None"], a: "Both" },
  { q: "Genetic unit?", o: ["Gene", "Cell", "Organ", "Tissue"], a: "Gene" },
  { q: "Chromosome?", o: ["DNA", "Protein", "Fat", "Carb"], a: "DNA" },
  { q: "Plant root function?", o: ["Absorb", "Breathe", "Think", "Move"], a: "Absorb" },
  { q: "Stem function?", o: ["Support", "Think", "Digest", "Breathe"], a: "Support" },
  { q: "Leaf function?", o: ["Photosynthesis", "Digestion", "Breathing", "Circulation"], a: "Photosynthesis" },
  { q: "Flower function?", o: ["Reproduction", "Thinking", "Breathing", "Digestion"], a: "Reproduction" },
  { q: "Seed function?", o: ["Growth", "Thinking", "Breathing", "Digestion"], a: "Growth" },
  { q: "Transpiration?", o: ["Water loss", "Water gain", "Gas gain", "None"], a: "Water loss" },
  { q: "Respiration type?", o: ["Aerobic", "Anaerobic", "Both", "None"], a: "Both" },
  { q: "Energy molecule?", o: ["ATP", "DNA", "Protein", "Fat"], a: "ATP" },
  { q: "Cell organelles?", o: ["Many", "One", "None", "Two"], a: "Many" },
  { q: "Living characteristics?", o: ["Growth", "Respiration", "Both", "None"], a: "Both" },
  { q: "Virus nature?", o: ["Living", "Non-living", "Both", "None"], a: "Both" },
  { q: "Bacteria type?", o: ["Prokaryote", "Eukaryote", "Both", "None"], a: "Prokaryote" },
  { q: "Fungi example?", o: ["Mushroom", "Tree", "Fish", "Bird"], a: "Mushroom" },
  { q: "Protista example?", o: ["Amoeba", "Fish", "Bird", "Tree"], a: "Amoeba" },
  { q: "Animal kingdom?", o: ["Multicellular", "Unicellular", "None", "Both"], a: "Multicellular" },
  { q: "Plant kingdom?", o: ["Autotroph", "Heterotroph", "None", "Both"], a: "Autotroph" },
  { q: "Food chain?", o: ["Energy flow", "Water flow", "Air flow", "None"], a: "Energy flow" },
  { q: "Ecosystem?", o: ["Interaction", "Isolation", "None", "Single"], a: "Interaction" },
  { q: "Biodiversity?", o: ["Variety", "Single", "None", "Few"], a: "Variety" },
  { q: "Conservation?", o: ["Protection", "Destruction", "None", "Loss"], a: "Protection" },
  { q: "Pollution?", o: ["Harmful", "Useful", "None", "Both"], a: "Harmful" },
  { q: "Global warming?", o: ["Temp rise", "Temp fall", "None", "Both"], a: "Temp rise" },
  { q: "Ozone layer?", o: ["Protect", "Harm", "None", "Destroy"], a: "Protect" },
  { q: "Deforestation?", o: ["Tree loss", "Tree gain", "None", "Both"], a: "Tree loss" },
  { q: "Afforestation?", o: ["Plant trees", "Cut trees", "None", "Both"], a: "Plant trees" },
  { q: "Natural resources?", o: ["Useful", "Harmful", "None", "Both"], a: "Useful" },
  { q: "Renewable?", o: ["Reusable", "Non-reusable", "None", "Both"], a: "Reusable" },
  { q: "Non-renewable?", o: ["Limited", "Unlimited", "None", "Both"], a: "Limited" },
  { q: "Sustainable?", o: ["Balance", "Imbalance", "None", "Both"], a: "Balance" },
  { q: "Environment?", o: ["Surroundings", "Inside", "None", "Single"], a: "Surroundings" }
];

const chemistryQuestions = [
  { q: "pH of pure water?", o: ["5", "6", "7", "8"], a: "7" },
  { q: "Symbol of Sodium?", o: ["Na", "S", "So", "N"], a: "Na" },
  { q: "Acid in stomach?", o: ["HCl", "H2SO4", "HNO3", "CH3COOH"], a: "HCl" },
  { q: "Water formula?", o: ["H2O", "CO2", "O2", "H2"], a: "H2O" },
  { q: "Atomic number means?", o: ["Protons", "Neutrons", "Electrons", "Mass"], a: "Protons" },
  { q: "Liquid metal?", o: ["Mercury", "Iron", "Copper", "Zinc"], a: "Mercury" },
  { q: "Acid turns blue litmus?", o: ["Red", "Green", "Yellow", "None"], a: "Red" },
  { q: "Base turns red litmus?", o: ["Blue", "Green", "Yellow", "None"], a: "Blue" },
  { q: "Salt example?", o: ["NaCl", "HCl", "NaOH", "H2SO4"], a: "NaCl" },
  { q: "Neutralization?", o: ["Acid+Base", "Acid+Acid", "Base+Base", "None"], a: "Acid+Base" },

  { q: "Oxidation?", o: ["Loss of electrons", "Gain of electrons", "Loss of protons", "Gain of neutrons"], a: "Loss of electrons" },
  { q: "Reduction?", o: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], a: "Gain of electrons" },
  { q: "Electron charge?", o: ["Negative", "Positive", "Neutral", "None"], a: "Negative" },
  { q: "Proton charge?", o: ["Positive", "Negative", "Neutral", "None"], a: "Positive" },
  { q: "Neutron charge?", o: ["Neutral", "Positive", "Negative", "None"], a: "Neutral" },
  { q: "Atomic mass equals?", o: ["Protons + Neutrons", "Protons + Electrons", "Neutrons + Electrons", "All particles"], a: "Protons + Neutrons" },
  { q: "Mole concept related to?", o: ["Amount of substance", "Color of substance", "Temperature", "Pressure"], a: "Amount of substance" },
  { q: "Avogadro number?", o: ["6.022×10^23", "3.0×10^8", "1.6×10^-19", "9.8"], a: "6.022×10^23" },
  { q: "Rows in periodic table are called?", o: ["Periods", "Groups", "Blocks", "Families"], a: "Periods" },
  { q: "Columns in periodic table are called?", o: ["Groups", "Periods", "Rows", "Sets"], a: "Groups" },

  { q: "Metal example?", o: ["Fe", "O", "N", "Cl"], a: "Fe" },
  { q: "Non-metal example?", o: ["O", "Fe", "Cu", "Na"], a: "O" },
  { q: "Metalloid example?", o: ["Si", "Fe", "O", "Na"], a: "Si" },
  { q: "Gas state of matter?", o: ["Air", "Water", "Iron", "Salt"], a: "Air" },
  { q: "Solid state of matter?", o: ["Iron", "Air", "Water", "Gas"], a: "Iron" },
  { q: "Liquid state of matter?", o: ["Water", "Iron", "Air", "Salt"], a: "Water" },
  { q: "Solid to liquid change?", o: ["Melting", "Freezing", "Condensation", "Sublimation"], a: "Melting" },
  { q: "Liquid to gas change?", o: ["Evaporation", "Melting", "Freezing", "Condensation"], a: "Evaporation" },
  { q: "Gas to liquid change?", o: ["Condensation", "Melting", "Freezing", "Sublimation"], a: "Condensation" },
  { q: "Solid to gas change?", o: ["Sublimation", "Melting", "Freezing", "Condensation"], a: "Sublimation" },

  { q: "Law of conservation of mass says?", o: ["Mass is neither created nor destroyed", "Energy is lost always", "Atoms disappear", "Matter becomes light"], a: "Mass is neither created nor destroyed" },
  { q: "Chemical reaction means?", o: ["New substance formed", "Only shape changes", "Only size changes", "No change"], a: "New substance formed" },
  { q: "Catalyst?", o: ["Speeds reaction", "Slows reaction", "Stops reaction", "Destroys reactants"], a: "Speeds reaction" },
  { q: "Endothermic reaction?", o: ["Absorbs heat", "Releases heat", "No heat", "Creates atoms"], a: "Absorbs heat" },
  { q: "Exothermic reaction?", o: ["Releases heat", "Absorbs heat", "No heat", "Creates light only"], a: "Releases heat" },
  { q: "pH less than 7 means?", o: ["Acidic", "Basic", "Neutral", "Salt"], a: "Acidic" },
  { q: "pH greater than 7 means?", o: ["Basic", "Acidic", "Neutral", "Salt"], a: "Basic" },
  { q: "pH equal to 7 means?", o: ["Neutral", "Acidic", "Basic", "Alkaline"], a: "Neutral" },
  { q: "Common salt formula?", o: ["NaCl", "KCl", "CaCl2", "MgCl2"], a: "NaCl" },
  { q: "Baking soda formula?", o: ["NaHCO3", "Na2CO3", "CaCO3", "KOH"], a: "NaHCO3" },

  { q: "Washing soda formula?", o: ["Na2CO3", "NaCl", "NaOH", "H2SO4"], a: "Na2CO3" },
  { q: "Bleaching powder formula?", o: ["CaOCl2", "NaCl", "KCl", "CaCO3"], a: "CaOCl2" },
  { q: "Plaster of Paris formula?", o: ["CaSO4·1/2H2O", "CaCO3", "Na2SO4", "K2SO4"], a: "CaSO4·1/2H2O" },
  { q: "Rusting needs?", o: ["Oxygen and water", "Only oxygen", "Only water", "Carbon dioxide"], a: "Oxygen and water" },
  { q: "Corrosion means?", o: ["Slow damage of metals", "Melting of metals", "Boiling of metals", "Freezing of metals"], a: "Slow damage of metals" },
  { q: "Alloy means?", o: ["Mixture of metals", "Pure metal", "Pure non-metal", "Gas mixture"], a: "Mixture of metals" },
  { q: "Steel is an alloy of?", o: ["Iron and carbon", "Copper and zinc", "Tin and copper", "Gold and silver"], a: "Iron and carbon" },
  { q: "Brass is an alloy of?", o: ["Copper and zinc", "Iron and carbon", "Tin and copper", "Nickel and silver"], a: "Copper and zinc" },
  { q: "Bronze is an alloy of?", o: ["Copper and tin", "Copper and zinc", "Iron and carbon", "Aluminium and magnesium"], a: "Copper and tin" },
  { q: "Electrolysis is?", o: ["Decomposition by electricity", "Heating of substance", "Cooling of substance", "Mixing of liquids"], a: "Decomposition by electricity" },

  { q: "Anode is?", o: ["Positive electrode", "Negative electrode", "Neutral electrode", "No electrode"], a: "Positive electrode" },
  { q: "Cathode is?", o: ["Negative electrode", "Positive electrode", "Neutral electrode", "No electrode"], a: "Negative electrode" },
  { q: "Electrolyte is?", o: ["Conducting solution", "Dry powder only", "Metal sheet", "Plastic"], a: "Conducting solution" },
  { q: "Organic chemistry studies?", o: ["Carbon compounds", "Only metals", "Only gases", "Only salts"], a: "Carbon compounds" },
  { q: "Hydrocarbons contain?", o: ["Carbon and hydrogen", "Carbon and oxygen", "Hydrogen and oxygen", "Nitrogen and oxygen"], a: "Carbon and hydrogen" },
  { q: "Alkane has?", o: ["Single bonds", "Double bonds", "Triple bonds", "No bonds"], a: "Single bonds" },
  { q: "Alkene has?", o: ["Double bond", "Single bond", "Triple bond", "No bond"], a: "Double bond" },
  { q: "Alkyne has?", o: ["Triple bond", "Single bond", "Double bond", "No bond"], a: "Triple bond" },
  { q: "Functional group means?", o: ["Atom/group that gives properties", "Only a metal", "Only a gas", "Only salt"], a: "Atom/group that gives properties" },
  { q: "Alcohol functional group?", o: ["-OH", "-COOH", "-NH2", "-CHO"], a: "-OH" },

  { q: "Carboxylic acid group?", o: ["-COOH", "-OH", "-NH2", "-SH"], a: "-COOH" },
  { q: "Amine group?", o: ["-NH2", "-OH", "-COOH", "-Cl"], a: "-NH2" },
  { q: "Polymer means?", o: ["Large molecule", "Small atom", "Metal", "Gas"], a: "Large molecule" },
  { q: "Plastic is a?", o: ["Polymer", "Metal", "Gas", "Salt"], a: "Polymer" },
  { q: "Soap is usually?", o: ["Basic", "Acidic", "Neutral", "Metallic"], a: "Basic" },
  { q: "Detergent is used for?", o: ["Cleaning", "Heating", "Freezing", "Lighting"], a: "Cleaning" },
  { q: "Hard water contains?", o: ["Calcium and magnesium salts", "Only sodium", "Only oxygen", "Only chlorine"], a: "Calcium and magnesium salts" },
  { q: "Soft water means?", o: ["Little or no Ca and Mg salts", "Full of salts", "Full of metals", "Very acidic"], a: "Little or no Ca and Mg salts" },
  { q: "Distillation is used for?", o: ["Separating liquids", "Mixing liquids", "Heating metals", "Making acids"], a: "Separating liquids" },
  { q: "Filtration is used for?", o: ["Separating insoluble solid from liquid", "Mixing gases", "Making solution", "Heating solution"], a: "Separating insoluble solid from liquid" },

  { q: "Chromatography is used for?", o: ["Separation of dyes", "Heating metals", "Measuring mass", "Changing pH"], a: "Separation of dyes" },
  { q: "Solution is a?", o: ["Homogeneous mixture", "Heterogeneous mixture", "Pure element", "Pure compound"], a: "Homogeneous mixture" },
  { q: "Colloid is?", o: ["Intermediate mixture", "Pure substance", "Only gas", "Only metal"], a: "Intermediate mixture" },
  { q: "Suspension is?", o: ["Heterogeneous mixture", "Homogeneous mixture", "Pure liquid", "Pure solid"], a: "Heterogeneous mixture" },
  { q: "Solvent is?", o: ["Substance that dissolves solute", "Substance dissolved", "Only gas", "Only solid"], a: "Substance that dissolves solute" },
  { q: "Solute is?", o: ["Substance dissolved", "Substance that dissolves", "Only liquid", "Only metal"], a: "Substance dissolved" },
  { q: "Concentrated solution has?", o: ["More solute", "Less solute", "No solute", "Only water"], a: "More solute" },
  { q: "Dilute solution has?", o: ["Less solute", "More solute", "No water", "No solvent"], a: "Less solute" },
  { q: "Gas law formula?", o: ["PV = nRT", "F = ma", "V = IR", "E = mc^2"], a: "PV = nRT" },
  { q: "Pressure unit?", o: ["Pascal", "Joule", "Watt", "Newton"], a: "Pascal" },

  { q: "Volume unit?", o: ["Litre", "Newton", "Volt", "Ohm"], a: "Litre" },
  { q: "Temperature unit?", o: ["Kelvin", "Meter", "Ampere", "Joule"], a: "Kelvin" },
  { q: "Indicator for acids and bases?", o: ["Litmus", "Starch", "Salt", "Oil"], a: "Litmus" },
  { q: "Blue litmus in acid turns?", o: ["Red", "Blue", "Green", "Yellow"], a: "Red" },
  { q: "Red litmus in base turns?", o: ["Blue", "Red", "White", "Black"], a: "Blue" },
  { q: "Substance with pH 1 is?", o: ["Very acidic", "Neutral", "Basic", "Salt"], a: "Very acidic" },
  { q: "Substance with pH 14 is?", o: ["Very basic", "Neutral", "Acidic", "Salt"], a: "Very basic" },
  { q: "Vinegar contains?", o: ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"], a: "Acetic acid" },
  { q: "Lemon juice contains?", o: ["Citric acid", "Sodium hydroxide", "Calcium carbonate", "Ammonia"], a: "Citric acid" },
  { q: "Battery acid is?", o: ["Sulfuric acid", "Acetic acid", "Citric acid", "Carbonic acid"], a: "Sulfuric acid" },

  { q: "Fertilizer example?", o: ["Urea", "Sand", "Water", "Stone"], a: "Urea" },
  { q: "Urea is a?", o: ["Nitrogen fertilizer", "Acid", "Base", "Salt only"], a: "Nitrogen fertilizer" },
  { q: "Soap does not work well in?", o: ["Hard water", "Soft water", "Pure water", "Rain water"], a: "Hard water" },
  { q: "Common antacid contains?", o: ["Magnesium hydroxide", "Sodium chloride", "Water", "Sugar"], a: "Magnesium hydroxide" },
  { q: "Ammonia formula?", o: ["NH3", "NO2", "N2O", "NH4"], a: "NH3" },
  { q: "Carbon dioxide formula?", o: ["CO2", "CO", "C2O", "O2"], a: "CO2" },
  { q: "Oxygen formula?", o: ["O2", "O", "O3", "CO2"], a: "O2" },
  { q: "Ozone formula?", o: ["O3", "O2", "CO3", "N2O"], a: "O3" },
  { q: "Hydrogen formula?", o: ["H2", "H", "H3", "He"], a: "H2" },
  { q: "Nitrogen formula?", o: ["N2", "N", "NO2", "NH3"], a: "N2" }
];
const physicsQuestions = [
  { q: "SI unit of force?", o: ["Joule", "Newton", "Watt", "Pascal"], a: "Newton" },
  { q: "SI unit of work?", o: ["Newton", "Joule", "Watt", "Volt"], a: "Joule" },
  { q: "Acceleration due to gravity?", o: ["9.8 m/s²", "8.8 m/s²", "10.8 m/s²", "7.8 m/s²"], a: "9.8 m/s²" },
  { q: "Newton's first law is called?", o: ["Law of inertia", "Law of motion", "Law of gravitation", "Law of energy"], a: "Law of inertia" },
  { q: "Speed of light in vacuum?", o: ["3×10^8 m/s", "3×10^6 m/s", "3×10^7 m/s", "3×10^5 m/s"], a: "3×10^8 m/s" },
  { q: "SI unit of power?", o: ["Watt", "Joule", "Newton", "Pascal"], a: "Watt" },
  { q: "Unit of pressure?", o: ["Pascal", "Newton", "Joule", "Watt"], a: "Pascal" },
  { q: "Instrument to measure current?", o: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], a: "Ammeter" },
  { q: "Instrument to measure voltage?", o: ["Ammeter", "Voltmeter", "Speedometer", "Hydrometer"], a: "Voltmeter" },
  { q: "Ohm's law?", o: ["V=IR", "P=VI", "F=ma", "E=mc²"], a: "V=IR" },

  { q: "Formula of force?", o: ["F=ma", "V=IR", "P=VI", "E=mc²"], a: "F=ma" },
  { q: "Formula of momentum?", o: ["p=mv", "p=ma", "p=vt", "p=mg"], a: "p=mv" },
  { q: "Formula of kinetic energy?", o: ["1/2 mv²", "mgh", "mv", "F/d"], a: "1/2 mv²" },
  { q: "Formula of potential energy?", o: ["mgh", "1/2 mv²", "mv", "Fv"], a: "mgh" },
  { q: "Formula of density?", o: ["mass/volume", "volume/mass", "force/mass", "work/time"], a: "mass/volume" },
  { q: "Unit of density?", o: ["kg/m³", "m/s", "N/m", "J/s"], a: "kg/m³" },
  { q: "A body at rest has?", o: ["Zero velocity", "High force", "Zero mass", "High density"], a: "Zero velocity" },
  { q: "Change in velocity per unit time?", o: ["Acceleration", "Momentum", "Work", "Power"], a: "Acceleration" },
  { q: "SI unit of acceleration?", o: ["m/s²", "m/s", "kg/m³", "N"], a: "m/s²" },
  { q: "Newton's third law says?", o: ["Every action has equal and opposite reaction", "Energy is conserved", "Mass is conserved", "Force equals mass"], a: "Every action has equal and opposite reaction" },

  { q: "Center of gravity is?", o: ["Point where weight acts", "Point of heat", "Point of charge", "Point of speed"], a: "Point where weight acts" },
  { q: "Device used to measure temperature?", o: ["Thermometer", "Barometer", "Ammeter", "Voltmeter"], a: "Thermometer" },
  { q: "Device used to measure air pressure?", o: ["Barometer", "Thermometer", "Speedometer", "Hydrometer"], a: "Barometer" },
  { q: "Speed is?", o: ["Distance/time", "Force/time", "Mass/time", "Work/time"], a: "Distance/time" },
  { q: "Velocity is?", o: ["Speed with direction", "Only distance", "Only time", "Only force"], a: "Speed with direction" },
  { q: "Scalar quantity example?", o: ["Speed", "Force", "Velocity", "Acceleration"], a: "Speed" },
  { q: "Vector quantity example?", o: ["Velocity", "Mass", "Time", "Temperature"], a: "Velocity" },
  { q: "SI unit of time?", o: ["Second", "Minute", "Hour", "Day"], a: "Second" },
  { q: "SI unit of length?", o: ["Meter", "Centimeter", "Kilometer", "Inch"], a: "Meter" },
  { q: "SI unit of mass?", o: ["Kilogram", "Gram", "Pound", "Newton"], a: "Kilogram" },

  { q: "Simple machine example?", o: ["Lever", "Battery", "Wire", "Bulb"], a: "Lever" },
  { q: "Friction opposes?", o: ["Motion", "Mass", "Heat", "Light"], a: "Motion" },
  { q: "Friction between moving surfaces is?", o: ["Kinetic friction", "Static friction", "No friction", "Fluid friction"], a: "Kinetic friction" },
  { q: "Gravity is a?", o: ["Force", "Energy", "Mass", "Speed"], a: "Force" },
  { q: "Unit of heat?", o: ["Joule", "Newton", "Volt", "Watt"], a: "Joule" },
  { q: "Temperature of boiling water in Celsius?", o: ["100°C", "0°C", "50°C", "75°C"], a: "100°C" },
  { q: "Temperature of freezing water in Celsius?", o: ["0°C", "100°C", "25°C", "10°C"], a: "0°C" },
  { q: "Sound travels fastest in?", o: ["Solid", "Liquid", "Gas", "Vacuum"], a: "Solid" },
  { q: "Sound cannot travel in?", o: ["Vacuum", "Solid", "Liquid", "Air"], a: "Vacuum" },
  { q: "Speed of sound in air is about?", o: ["340 m/s", "34 m/s", "3400 m/s", "3 m/s"], a: "340 m/s" },

  { q: "Light travels in?", o: ["Straight line", "Curve", "Circle", "Zigzag"], a: "Straight line" },
  { q: "Mirror that gives upright image?", o: ["Plane mirror", "Concave mirror", "Convex mirror", "None"], a: "Plane mirror" },
  { q: "Mirror used in vehicle rear view?", o: ["Convex mirror", "Concave mirror", "Plane mirror", "Cylinder mirror"], a: "Convex mirror" },
  { q: "Lens used to correct myopia?", o: ["Concave lens", "Convex lens", "Plane lens", "Cylindrical lens"], a: "Concave lens" },
  { q: "Lens used to correct hypermetropia?", o: ["Convex lens", "Concave lens", "Plane lens", "None"], a: "Convex lens" },
  { q: "Image in plane mirror is?", o: ["Virtual", "Real", "Inverted", "Magnified"], a: "Virtual" },
  { q: "Rainbow is due to?", o: ["Dispersion", "Friction", "Reflection only", "Gravity"], a: "Dispersion" },
  { q: "Unit of frequency?", o: ["Hertz", "Volt", "Newton", "Joule"], a: "Hertz" },
  { q: "Wave frequency means?", o: ["Number of oscillations per second", "Wave height", "Wave speed", "Wave length"], a: "Number of oscillations per second" },
  { q: "Wavelength is?", o: ["Distance between two crests", "Time taken", "Force", "Pressure"], a: "Distance between two crests" },

  { q: "Amplitude means?", o: ["Maximum displacement", "Speed", "Frequency", "Mass"], a: "Maximum displacement" },
  { q: "Pitch of sound depends on?", o: ["Frequency", "Amplitude", "Speed", "Distance"], a: "Frequency" },
  { q: "Loudness depends on?", o: ["Amplitude", "Frequency", "Wavelength", "Time"], a: "Amplitude" },
  { q: "Echo is due to?", o: ["Reflection of sound", "Refraction of light", "Absorption", "Diffusion"], a: "Reflection of sound" },
  { q: "Sonar uses?", o: ["Sound waves", "Light waves", "X-rays", "Radio waves"], a: "Sound waves" },
  { q: "Ultrasound means?", o: ["Frequency above 20 kHz", "Below 20 Hz", "Visible sound", "No sound"], a: "Frequency above 20 kHz" },
  { q: "Inertia depends on?", o: ["Mass", "Speed", "Force", "Time"], a: "Mass" },
  { q: "Work is done when?", o: ["Force causes displacement", "Only force exists", "Only displacement exists", "Only heat exists"], a: "Force causes displacement" },
  { q: "Unit of electric charge?", o: ["Coulomb", "Ampere", "Volt", "Ohm"], a: "Coulomb" },
  { q: "Charge on electron is?", o: ["Negative", "Positive", "Neutral", "Zero mass"], a: "Negative" },

  { q: "Charge on proton is?", o: ["Positive", "Negative", "Neutral", "Zero"], a: "Positive" },
  { q: "Charge on neutron is?", o: ["Neutral", "Positive", "Negative", "All"], a: "Neutral" },
  { q: "Circuit component that gives resistance?", o: ["Resistor", "Battery", "Switch", "Bulb"], a: "Resistor" },
  { q: "Material that allows current easily?", o: ["Conductor", "Insulator", "Plastic", "Rubber"], a: "Conductor" },
  { q: "Material that does not allow current easily?", o: ["Insulator", "Conductor", "Metal", "Copper"], a: "Insulator" },
  { q: "Bulb glows when circuit is?", o: ["Closed", "Open", "Broken", "Empty"], a: "Closed" },
  { q: "Series circuit has?", o: ["Single path", "Many paths", "No path", "Random path"], a: "Single path" },
  { q: "Parallel circuit has?", o: ["Many paths", "Single path", "No path", "Broken path"], a: "Many paths" },
  { q: "Battery converts?", o: ["Chemical to electrical energy", "Heat to light", "Light to sound", "Mechanical to heat"], a: "Chemical to electrical energy" },
  { q: "Electric power formula?", o: ["P=VI", "P=F/A", "P=mv", "P=ma"], a: "P=VI" },

  { q: "Electrical energy unit?", o: ["Joule", "Newton", "Watt", "Volt"], a: "Joule" },
  { q: "Resistance unit?", o: ["Ohm", "Volt", "Ampere", "Newton"], a: "Ohm" },
  { q: "Current unit?", o: ["Ampere", "Volt", "Ohm", "Watt"], a: "Ampere" },
  { q: "Voltage unit?", o: ["Volt", "Ampere", "Ohm", "Joule"], a: "Volt" },
  { q: "Magnet attracts?", o: ["Iron", "Wood", "Glass", "Plastic"], a: "Iron" },
  { q: "Like poles of magnets?", o: ["Repel", "Attract", "Disappear", "Break"], a: "Repel" },
  { q: "Unlike poles of magnets?", o: ["Attract", "Repel", "Break", "Neutralize"], a: "Attract" },
  { q: "Earth behaves like a?", o: ["Magnet", "Battery", "Conductor", "Lens"], a: "Magnet" },
  { q: "Compass points to?", o: ["North", "South", "East", "West"], a: "North" },
  { q: "Magnetic field is strongest at?", o: ["Poles", "Center", "Middle only", "Any point"], a: "Poles" },

  { q: "Mirror used by dentists?", o: ["Concave mirror", "Convex mirror", "Plane mirror", "Cylindrical mirror"], a: "Concave mirror" },
  { q: "Image formed by convex mirror is?", o: ["Virtual and diminished", "Real and inverted", "Real and magnified", "Virtual and magnified"], a: "Virtual and diminished" },
  { q: "Image formed by concave lens is?", o: ["Virtual and diminished", "Real and inverted", "Virtual and magnified", "Real and diminished"], a: "Virtual and diminished" },
  { q: "Prism causes?", o: ["Dispersion", "Reflection", "Refraction only", "Absorption"], a: "Dispersion" },
  { q: "White light is composed of?", o: ["Seven colors", "One color", "Two colors", "No color"], a: "Seven colors" },
  { q: "Moon shines because of?", o: ["Reflected sunlight", "Own light", "Heat", "Electricity"], a: "Reflected sunlight" },
  { q: "Solar eclipse occurs when?", o: ["Moon comes between Sun and Earth", "Earth comes between Sun and Moon", "Sun comes between Earth and Moon", "No alignment"], a: "Moon comes between Sun and Earth" },
  { q: "Lunar eclipse occurs when?", o: ["Earth comes between Sun and Moon", "Moon comes between Sun and Earth", "Sun comes between Earth and Moon", "No alignment"], a: "Earth comes between Sun and Moon" },
  { q: "Photons are particles of?", o: ["Light", "Sound", "Heat", "Electricity"], a: "Light" },
  { q: "X-rays are used to see?", o: ["Bones", "Sound", "Air", "Heat"], a: "Bones" },

  { q: "Nuclear power comes from?", o: ["Atom nucleus", "Outer shell", "Air", "Water"], a: "Atom nucleus" },
  { q: "The branch that studies atoms and nuclei is?", o: ["Modern physics", "Botany", "Zoology", "Geology"], a: "Modern physics" },
  { q: "Radioactivity is?", o: ["Emission from unstable nuclei", "Reflection of sound", "Magnetism", "Friction"], a: "Emission from unstable nuclei" },
  { q: "Alpha particle is?", o: ["Helium nucleus", "Electron", "Proton", "Neutron"], a: "Helium nucleus" },
  { q: "Beta particle is?", o: ["Electron", "Proton", "Photon", "Neutron"], a: "Electron" },
  { q: "Gamma rays are?", o: ["Very high energy electromagnetic waves", "Sound waves", "Water waves", "Heat waves"], a: "Very high energy electromagnetic waves" },
  { q: "Unit of half-life?", o: ["Time", "Mass", "Length", "Energy"], a: "Time" },
  { q: "Nuclear fusion is?", o: ["Combining nuclei", "Breaking nuclei", "Heating water", "Electric flow"], a: "Combining nuclei" },
  { q: "Nuclear fission is?", o: ["Splitting nuclei", "Combining nuclei", "Melting metals", "Reflection"], a: "Splitting nuclei" },
  { q: "The sun gets energy from?", o: ["Fusion", "Fission", "Combustion", "Friction"], a: "Fusion" }
];

const mathsQuestions = [
  { q: 'What is the value of lim x→0 (sin x)/x?', o: ['0', '1', '∞', 'Does not exist'], a: '1' },
  { q: 'If y = x^2, then dy/dx at x=3 is?', o: ['3', '6', '9', '12'], a: '6' },
  { q: 'What is the determinant of [[1,2],[3,4]]?', o: ['-2', '2', '4', '-4'], a: '-2' },
  { q: 'Distance between points (1,2) and (4,6)?', o: ['3', '4', '5', '6'], a: '5' },
  { q: 'What is the sum of first 10 natural numbers?', o: ['45', '50', '55', '60'], a: '55' },
  { q: 'If tan θ = √3, then θ =', o: ['30°', '45°', '60°', '90°'], a: '60°' },
  { q: 'What is the value of 0! ?', o: ['0', '1', '2', 'Undefined'], a: '1' },
  { q: 'Find the midpoint of (2,3) and (6,7).', o: ['(3,4)', '(4,5)', '(5,6)', '(2,4)'], a: '(4,5)' },
  { q: 'What is the derivative of sin x?', o: ['cos x', '-cos x', 'sin x', '-sin x'], a: 'cos x' },
  { q: 'If a matrix is skew-symmetric, then its diagonal entries are?', o: ['1', '-1', '0', 'Any value'], a: '0' },
  { q: 'What is ∫ x dx?', o: ['x', 'x^2', 'x^2/2 + C', '2x + C'], a: 'x^2/2 + C' },
  { q: 'Find the number of solutions of x^2+1=0 in real numbers.', o: ['0', '1', '2', 'Infinite'], a: '0' },
  { q: 'If f(x)=x^3-1, then f(2)=?', o: ['5', '6', '7', '8'], a: '7' },
  { q: 'What is the equation of a line with slope 0?', o: ['x=c', 'y=c', 'y=mx', 'x+y=0'], a: 'y=c' },
  { q: 'What is the value of cos 60°?', o: ['1/2', '√3/2', '0', '1'], a: '1/2' },
  { q: 'A binomial expansion of (a+b)^2 is?', o: ['a^2+b^2', 'a^2+2ab+b^2', 'a^2-ab+b^2', '2a+2b'], a: 'a^2+2ab+b^2' },
  { q: 'What is the sum of angles in a quadrilateral?', o: ['180°', '270°', '360°', '540°'], a: '360°' },
  { q: 'If x+y=7 and x-y=1, then x=?', o: ['3', '4', '5', '6'], a: '4' },
  { q: 'What is the principal value of sin^-1(1/2)?', o: ['15°', '30°', '45°', '60°'], a: '30°' },
  { q: 'What is the period of sin x?', o: ['π', '2π', 'π/2', '4π'], a: '2π' },
  { q: 'What is the value of ∫ 1/x dx?', o: ['ln|x| + C', 'x + C', '1/x + C', 'e^x + C'], a: 'ln|x| + C' },
  { q: 'What is the derivative of e^x?', o: ['x e^(x-1)', 'e^x', 'e^(x-1)', '1'], a: 'e^x' },
  { q: 'Find the roots of x^2-1=0.', o: ['0,1', '-1,1', '1,2', '-2,2'], a: '-1,1' },
  { q: 'If a line passes through origin and slope m, its equation is?', o: ['y=mx', 'y=x+m', 'x=my', 'x+y=m'], a: 'y=mx' },
  { q: 'What is the sum of an infinite G.P. with |r|<1?', o: ['a/(1-r)', 'a(1-r)', 'ar', 'a+r'], a: 'a/(1-r)' },
  { q: 'The value of tan 0° is?', o: ['0', '1', 'Undefined', '∞'], a: '0' },
  { q: 'If det(A)=0, the matrix A is?', o: ['Invertible', 'Singular', 'Identity', 'Diagonal'], a: 'Singular' },
  { q: 'What is the distance formula in coordinate geometry based on?', o: ['Pythagoras', 'Newton', 'Euler', 'Leibniz'], a: 'Pythagoras' },
  { q: 'What is the value of log10 1?', o: ['0', '1', '10', 'Undefined'], a: '0' },
  { q: 'What is the derivative of ln x?', o: ['x', '1/x', 'ln x', 'e^x'], a: '1/x' },
  { q: 'Find the value of lim x→0 (1-cos x)/x^2.', o: ['0', '1/2', '1', '2'], a: '1/2' },
  { q: 'If y = x^2 + 3x, then dy/dx =', o: ['2x+3', 'x+3', '2x-3', 'x^2+3'], a: '2x+3' },
  { q: 'The number of permutations of 3 objects is?', o: ['3', '6', '9', '12'], a: '6' },
  { q: 'What is the modulus of complex number 3+4i?', o: ['5', '6', '7', '8'], a: '5' },
  { q: 'If sec θ = 2, then cos θ =', o: ['1/2', '2', '1', '√3/2'], a: '1/2' },
  { q: 'What is the area under x-axis in definite integral called?', o: ['Positive area', 'Signed area', 'Volume', 'Slope'], a: 'Signed area' },
  { q: 'What is the general term of AP a, a+d, a+2d, ... ?', o: ['a+nd', 'a+(n-1)d', 'a+n+d', 'nd'], a: 'a+(n-1)d' },
  { q: 'If matrix A is 3x3, the number of elements is?', o: ['6', '8', '9', '12'], a: '9' },
  { q: 'What is the derivative of x^n?', o: ['nx^(n-1)', 'x^n', 'n/x', 'x^(n+1)'], a: 'nx^(n-1)' },
  { q: 'The graph of y = |x| is what shape?', o: ['Parabola', 'V-shape', 'Circle', 'Line'], a: 'V-shape' },
  { q: 'What is the value of ∫ x^2 dx?', o: ['x^3/3 + C', 'x^2/2 + C', '2x + C', 'x^3 + C'], a: 'x^3/3 + C' },
  { q: 'If f(x)=x^2 and g(x)=2x, then (f∘g)(x)=?', o: ['2x^2', '4x^2', 'x^4', 'x^2+2x'], a: '4x^2' },
  { q: 'What is the determinant of identity matrix I3?', o: ['0', '1', '3', '9'], a: '1' },
  { q: 'If x^2-6x+9=0, then x=?', o: ['3', '-3', '±3', '0'], a: '3' },
  { q: 'What is the value of sin^2 θ + cos^2 θ?', o: ['0', '1', '2', 'sin θ'], a: '1' },
  { q: 'If two lines are perpendicular, product of slopes is?', o: ['0', '1', '-1', 'Undefined'], a: '-1' },
  { q: 'The rank of a full 3x3 identity matrix is?', o: ['1', '2', '3', '0'], a: '3' },
  { q: 'What is the value of ∫ e^x dx?', o: ['e^x + C', 'x e^x + C', '1/e^x + C', 'ln x + C'], a: 'e^x + C' },
  { q: 'The equation x^2+y^2=r^2 represents a?', o: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'], a: 'Circle' },
  { q: 'What is the value of cos 90°?', o: ['0', '1', '1/2', '-1'], a: '0' }
];
const loginBox = document.getElementById("login-box");
const dashboardBox = document.getElementById("dashboard-box");
const levelsBox = document.getElementById("levels-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const startBtn = document.getElementById("start-btn");
const loginMsg = document.getElementById("login-msg");
const logoutBtn = document.getElementById("logout-btn");
const goDashboardBtn = document.getElementById("go-dashboard");
const backDashboardBtn = document.getElementById("back-dashboard-btn");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

const userNameEl = document.getElementById("user-name");
const userEmailEl = document.getElementById("user-email");
const userProgressEl = document.getElementById("user-progress");
const bioProgressEl = document.getElementById("bio-progress");
const chemProgressEl = document.getElementById("chem-progress");
const phyProgressEl = document.getElementById("phy-progress");
const mathProgressEl = document.getElementById("math-progress");
const bioBar = document.getElementById("bio-bar");
const chemBar = document.getElementById("chem-bar");
const phyBar = document.getElementById("phy-bar");
const mathBar = document.getElementById("math-bar");
const levelsTitle = document.getElementById("levels-title");
const levelsSubtitle = document.getElementById("levels-subtitle");
const levelGrid = document.getElementById("level-grid");
const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".option");
const counterEl = document.getElementById("counter");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const welcomeEl = document.getElementById("welcome");
const starsEl = document.getElementById("stars");
const earnedStarsEl = document.getElementById("earned-stars");
const themeBanner = document.getElementById("subject-theme");
const themeName = document.getElementById("theme-name");
const themeIcon = document.getElementById("theme-icon");

const subjectCards = document.querySelectorAll(".subject-card");
let currentUser = "";
let currentEmail = "";
let currentSubject = "";
let currentLevel = 1;
let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let timer = null;
let timeLeft = 0;
const questionsPerLevel = 10;
const totalLevels = 10;

function showSection(section) {
  [loginBox, dashboardBox, levelsBox, quizBox, resultBox].forEach(b => b.classList.add("hidden"));
  section.classList.remove("hidden");
}

function normalizeText(t) { return t.trim().replace(/\s+/g, " "); }
function normalizeEmail(e) { return e.trim().toLowerCase(); }
function getUsersData() { return JSON.parse(localStorage.getItem("quizily_users") || "{}"); }
function saveUsersData(d) { localStorage.setItem("quizily_users", JSON.stringify(d)); }
function defaultSubjectData() { return { completedLevels: 0, unlockedLevel: 1, stars: 0, bestScore: 0 }; }

function defaultUser(displayName, email) {
  return {
    displayName,
    email,
    lastSubject: "biology",
    subjects: {
      biology: defaultSubjectData(),
      chemistry: defaultSubjectData(),
      physics: defaultSubjectData(),
      maths: defaultSubjectData()
    }
  };
}

function ensureUser(email, displayName) {
  const users = getUsersData();
  if (!users[email]) users[email] = defaultUser(displayName, email);
  saveUsersData(users);
  return users[email];
}

function loadDashboardProgress() {
  const users = getUsersData();
  const u = users[currentEmail];
  if (!u) return;
  const s = u.subjects;
  bioProgressEl.textContent = `${s.biology.completedLevels}/10`;
  chemProgressEl.textContent = `${s.chemistry.completedLevels}/10`;
  phyProgressEl.textContent = `${s.physics.completedLevels}/10`;
  mathProgressEl.textContent = `${s.maths.completedLevels}/10`;
  bioBar.style.width = `${s.biology.completedLevels * 10}%`;
  chemBar.style.width = `${s.chemistry.completedLevels * 10}%`;
  phyBar.style.width = `${s.physics.completedLevels * 10}%`;
  mathBar.style.width = `${s.maths.completedLevels * 10}%`;
  userProgressEl.textContent = `${s.biology.completedLevels + s.chemistry.completedLevels + s.physics.completedLevels + s.maths.completedLevels} levels completed total`;
}

function login() {
  const name = normalizeText(usernameInput.value);
  const email = normalizeEmail(emailInput.value);
  if (!name || !email) {
    loginMsg.textContent = "Please enter both name and email.";
    return;
  }
  currentUser = name;
  currentEmail = email;
  ensureUser(currentEmail, currentUser);
  userNameEl.textContent = currentUser;
  userEmailEl.textContent = currentEmail;
  loginMsg.textContent = "";
  loadDashboardProgress();
  showSection(dashboardBox);
}

function openLevels(subject) {
  currentSubject = subject;
  levelsTitle.textContent = `${subject.charAt(0).toUpperCase() + subject.slice(1)} Levels`;
  levelsSubtitle.textContent = "Choose a level to begin.";

  const themeText = {
    biology: { name: "Biology", icon: "🌿", className: "biology" },
    chemistry: { name: "Chemistry", icon: "⚗️", className: "chemistry" },
    maths: { name: "Maths", icon: "🔢", className: "maths" },
    physics: { name: "Physics", icon: "⚡", className: "physics" }
  };

  themeBanner.className = `theme-banner ${themeText[subject].className}`;
  themeIcon.textContent = themeText[subject].icon;
  themeName.textContent = themeText[subject].name;
  themeBanner.classList.remove("hidden");

  renderLevelGrid();
  showSection(levelsBox);
}

function renderLevelGrid() {
  const users = getUsersData();
  const user = users[currentEmail];
  const data = user.subjects[currentSubject];
  const unlocked = data.unlockedLevel || 1;
  const completed = data.completedLevels || 0;
  levelGrid.innerHTML = "";
  for (let i = 1; i <= totalLevels; i++) {
    const btn = document.createElement("button");
    btn.className = "level-card";
    if (i <= completed) btn.classList.add("completed");
    if (i > unlocked) btn.classList.add("locked");
    btn.innerHTML = `<div class="lock-icon">${i <= completed ? "✅" : (i > unlocked ? "🔒" : "🎯")}</div><div class="level-number">Level ${i}</div><div class="level-status">${i <= completed ? "Completed" : (i > unlocked ? "Locked" : "Available")}</div>`;
    if (i <= unlocked) btn.addEventListener("click", () => startLevel(i));
    levelGrid.appendChild(btn);
  }
}

function startLevel(levelNumber) {
  currentLevel = levelNumber;
  const allQuestions = currentSubject === "biology" ? biologyQuestions : currentSubject === "chemistry" ? chemistryQuestions : currentSubject === "physics" ? physicsQuestions : mathsQuestions;
  const start = (levelNumber - 1) * questionsPerLevel;
  selectedQuestions = allQuestions.slice(start, start + questionsPerLevel);
  currentQuestion = 0;
  score = 0;
  showSection(quizBox);
  loadQuestion();
}

function getTimeForLevel() { return Math.max(65 - currentLevel * 5, 20); }

function startTimer() {
  clearInterval(timer);
  timeLeft = getTimeForLevel();
  timerEl.textContent = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function stopTimer() { clearInterval(timer); }

function loadQuestion() {
  const q = selectedQuestions[currentQuestion];
  counterEl.textContent = `Level ${currentLevel}/${totalLevels} - Q${currentQuestion + 1}/${questionsPerLevel}`;
  progressBar.style.width = `${((currentQuestion + 1) / questionsPerLevel) * 100}%`;
  questionEl.textContent = q.q;
  optionEls.forEach((btn, i) => {
    btn.textContent = q.o[i];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
  startTimer();
}

optionEls.forEach(btn => btn.addEventListener("click", () => {
  stopTimer();
  const correct = selectedQuestions[currentQuestion].a;
  optionEls.forEach(b => b.disabled = true);
  if (btn.textContent === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    optionEls.forEach(b => { if (b.textContent === correct) b.classList.add("correct"); });
  }
  nextBtn.style.display = "inline-block";
}));

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) loadQuestion();
  else finishLevel();
}

function finishLevel() {
  stopTimer();
  const users = getUsersData();
  const user = users[currentEmail];
  const data = user.subjects[currentSubject];
  data.completedLevels = Math.max(data.completedLevels, currentLevel);
  data.unlockedLevel = Math.max(data.unlockedLevel, currentLevel + 1);
  data.bestScore = Math.max(data.bestScore, score);
  saveUsersData(users);
  loadDashboardProgress();
  earnedStarsEl.textContent = currentLevel;
  scoreEl.textContent = `${score}/${selectedQuestions.length}`;
  welcomeEl.textContent = `Great job, ${currentUser}!`;
  starsEl.textContent = "⭐".repeat(currentLevel);
  showSection(resultBox);
}

function restartQuiz() {
  renderLevelGrid();
  showSection(levelsBox);
}

function logout() {
  currentUser = "";
  currentEmail = "";
  usernameInput.value = "";
  emailInput.value = "";
  themeBanner.classList.add("hidden");
  showSection(loginBox);
}

startBtn.addEventListener("click", login);
usernameInput.addEventListener("keydown", e => { if (e.key === "Enter") login(); });
emailInput.addEventListener("keydown", e => { if (e.key === "Enter") login(); });
subjectCards.forEach(card => card.addEventListener("click", () => openLevels(card.dataset.subject)));
logoutBtn.addEventListener("click", logout);
goDashboardBtn.addEventListener("click", () => showSection(dashboardBox));
backDashboardBtn.addEventListener("click", () => showSection(dashboardBox));
backBtn.addEventListener("click", () => {
  stopTimer();
  renderLevelGrid();
  showSection(levelsBox);
});
nextBtn.addEventListener("click", nextQuestion);
document.getElementById("restart-btn")?.addEventListener("click", restartQuiz);

document.addEventListener("DOMContentLoaded", () => showSection(loginBox));
