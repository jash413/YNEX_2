const specifications = [
  {
    projectId: 200001,
    title: "Masonry Stucco Specifications",
    "SPECIFICATION DESCRIPTION":
      "Vendor to supply all materials and / or labor for the following:",
    sections: [
      {
        sectionName: "Exterior Wall Finish",
        fields: [
          {
            attributeName: "perPlan",
            label: "Per Plan?",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
          {
            attributeName: "type",
            label: "Type",
            inputType: "radio",
            options: [
              { value: "trueStucco", label: "True Stucco" },
              { value: "brick", label: "Brick" },
              { value: "culturedStone", label: "Cultured Stone" },
              { value: "other", label: "Other" },
              { value: "EIFSStyleAndColor", label: "EIFS Style & Color" },
            ],
          },
          {
            attributeName: "other",
            label: "___________________________________",
            inputType: "text",
          },
          {
            attributeName: "EIFSStyleAndColor",
            label: "___________________________________",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Special Materials",
        fields: [
          {
            attributeName: "specialMaterials",
            label: "Special Materials",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },

      {
        sectionName: "Details, if other than per plan",
        fields: [
          {
            attributeName: "deviations",
            label: "Deviations",
            inputType: "text",
            placeholder: "Details, if other than per plan",
          },
        ],
      },
      {
        sectionName: "Fireplace",
        fields: [
          {
            attributeName: "fireplace",
            label: "Fireplace",
            inputType: "radio",
            options: [
              { value: "insert", label: "Insert" },
              { value: "zeroClearance", label: "Zero clearance" },
              { value: "fullMasonry", label: "Full Masonry" },
              { value: "withMasonryHearth", label: "With masonry hearth" },
              { value: "withMasonryMantel", label: "With Masonry Mantel" },
            ],
          },
        ],
      },
      {
        sectionName: "Facing",
        fields: [
          {
            attributeName: "facing",
            label: "Facing",
            inputType: "radio",
            options: [
              { value: "fullHeight", label: "Full Height" },
              { value: "mantelHeight", label: "Mantel Height" },
            ],
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Home Utilities Setup",
    sections: [
      {
        sectionName: "General Information",
        fields: [
          {
            attributeName: "needSitePlan",
            label: "Need site plan?",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
      {
        sectionName: "Power",
        fields: [
          {
            attributeName: "powerType",
            label: "Power",
            inputType: "radio",
            options: [
              { value: "underground", label: "Underground" },
              { value: "overhead", label: "Overhead" },
            ],
          },
          {
            attributeName: "transformerNeeded",
            label: "Transformer needed?",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
          {
            attributeName: "connectionFee",
            label: "Connection Fee $",
            inputType: "number",
            placeholder: "Approximate, Owner to check",
          },
          {
            attributeName: "electricCompany",
            label: "Electric Company",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Gas",
        fields: [
          {
            attributeName: "gasType",
            label: "Gas",
            inputType: "radio",
            options: [
              { value: "naturalGas", label: "Natural Gas" },
              { value: "propane", label: "Propane" },
              { value: "electricOnly", label: "Electric only" },
            ],
          },
        ],
      },
      {
        sectionName: "Water",
        fields: [
          {
            attributeName: "waterType",
            label: "Water",
            inputType: "checkbox",
            options: [{ value: "public", label: "Public" }],
          },
          {
            attributeName: "membershipFee",
            label: "Membership Fee $",
            inputType: "number",
            placeholder: "Owner to check availability",
          },
          {
            attributeName: "meterFee",
            label: "Meter Fee $",
            inputType: "number",
            placeholder: "Owner to check availability",
          },
          {
            attributeName: "wellDrillingCost",
            label: "Drilling Cost (per ft) $",
            inputType: "number",
          },
          {
            attributeName: "approximateDepth",
            label: "Approximate Depth",
            inputType: "number",
          },
        ],
      },
      {
        sectionName: "Holding Tank",
        fields: [
          {
            attributeName: "holdingTankType",
            label: "Holding Tank",
            inputType: "radio",
            options: [
              { value: "none", label: "None" },
              { value: "inside", label: "Inside" },
              { value: "outside", label: "Outside" },
              { value: "garage", label: "Garage" },
            ],
          },
        ],
      },
      {
        sectionName: "Sewer",
        fields: [
          {
            attributeName: "distanceToSewerStub",
            label: "Distance from house to sewer stub",
            inputType: "number",
          },
          {
            attributeName: "sewerApproximateDepth",
            label: "Approximate Depth",
            inputType: "number",
          },
          {
            attributeName: "sewerMembershipFeeNote",
            label: "Owner to check on membership fees.",
            inputType: "text",
            disabled: true,
          },
          {
            attributeName: "grinderPump",
            label: "Grinder Pump",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
          {
            attributeName: "riserPump",
            label: "Riser Pump",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
      {
        sectionName: "Septic",
        fields: [
          {
            attributeName: "septicDesignNote",
            label:
              "A copy of the approved septic design will be needed for bidding.",
            inputType: "text",
            disabled: true,
          },
          {
            attributeName: "numberOfBedrooms",
            label: "Number of Bed Rooms",
            inputType: "number",
          },
          {
            attributeName: "waterSource",
            label: "Water",
            inputType: "radio",
            options: [
              { value: "public", label: "Public" },
              { value: "private", label: "Private" },
            ],
          },
          {
            attributeName: "numberOfOtherRooms",
            label: "Number of other Rooms w/Closets",
            inputType: "number",
          },
          {
            attributeName: "soilsType",
            label: "Soils Type",
            inputType: "text",
          },
          {
            attributeName: "livingSpaceArea",
            label: "Sq Ft of Conditioned Living Space",
            inputType: "number",
          },
          {
            attributeName: "slopingProperty",
            label: "Sloping Property",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
          {
            attributeName: "lakefrontProperty",
            label: "Lakefront Property",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
          {
            attributeName: "otherNotes",
            label: "Other notes",
            inputType: "textarea",
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Home Design",
    sections: [
      {
        sectionName: "General Information",
        fields: [
          {
            attributeName: "needSitePlan",
            label: "Need site plan?",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
      {
        sectionName: "Design",
        fields: [
          {
            attributeName: "designType",
            label: "Design Type",
            inputType: "radio",
            options: [
              { value: "custom", label: "Custom" },
              { value: "stock", label: "Stock" },
            ],
          },
          {
            attributeName: "designer",
            label: "Designer",
            inputType: "text",
          },
          {
            attributeName: "designerContact",
            label: "Designer Contact",
            inputType: "text",
          },
          {
            attributeName: "designerFee",
            label: "Designer Fee $",
            inputType: "number",
          },
          {
            attributeName: "designerFeeNote",
            label: "Designer Fee Note",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Floor Plan",
        fields: [
          {
            attributeName: "floorPlanType",
            label: "Floor Plan Type",
            inputType: "radio",
            options: [
              { value: "custom", label: "Custom" },
              { value: "stock", label: "Stock" },
            ],
          },
          {
            attributeName: "floorPlanDesigner",
            label: "Designer",
            inputType: "text",
          },
          {
            attributeName: "floorPlanDesignerContact",
            label: "Designer Contact",
            inputType: "text",
          },
          {
            attributeName: "floorPlanDesignerFee",
            label: "Designer Fee $",
            inputType: "number",
          },
          {
            attributeName: "floorPlanDesignerFeeNote",
            label: "Designer Fee Note",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Elevation",
        fields: [
          {
            attributeName: "elevationType",
            label: "Elevation Type",
            inputType: "radio",
            options: [
              { value: "custom", label: "Custom" },
              { value: "stock", label: "Stock" },
            ],
          },
          {
            attributeName: "elevationDesigner",
            label: "Designer",
            inputType: "text",
          },
          {
            attributeName: "elevationDesignerContact",
            label: "Designer Contact",
            inputType: "text",
          },
          {
            attributeName: "elevationDesignerFee",
            label: "Designer Fee $",
            inputType: "number",
          },
          {
            attributeName: "elevationDesignerFeeNote",
            label: "Designer Fee Note",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Other",
        fields: [
          {
            attributeName: "otherNotes",
            label: "Other notes",
            inputType: "textarea",
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Site Preparation",
    sections: [
      {
        sectionName: "Land Clearing",
        fields: [
          {
            attributeName: "treesToRemove",
            label: "Trees to Remove",
            inputType: "number",
          },
          {
            attributeName: "stumpRemoval",
            label: "Stump Removal",
            inputType: "radio",
            options: [
              { value: "grind", label: "Grind" },
              { value: "excavate", label: "Excavate" },
            ],
          },
          {
            attributeName: "brushClearing",
            label: "Brush Clearing (acres)",
            inputType: "number",
          },
        ],
      },
      {
        sectionName: "Grading",
        fields: [
          {
            attributeName: "soilType",
            label: "Soil Type",
            inputType: "text",
          },
          {
            attributeName: "fillNeeded",
            label: "Fill Needed (cubic yards)",
            inputType: "number",
          },
          {
            attributeName: "retainingWall",
            label: "Retaining Wall",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
      {
        sectionName: "Access",
        fields: [
          {
            attributeName: "drivewayLength",
            label: "Driveway Length (ft)",
            inputType: "number",
          },
          {
            attributeName: "drivewayMaterial",
            label: "Driveway Material",
            inputType: "radio",
            options: [
              { value: "asphalt", label: "Asphalt" },
              { value: "concrete", label: "Concrete" },
              { value: "gravel", label: "Gravel" },
            ],
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Foundation & Structure",
    sections: [
      {
        sectionName: "Foundation",
        fields: [
          {
            attributeName: "foundationType",
            label: "Foundation Type",
            inputType: "radio",
            options: [
              { value: "slab", label: "Slab" },
              { value: "crawl", label: "Crawl Space" },
              { value: "basement", label: "Basement" },
            ],
          },
          {
            attributeName: "foundationMaterial",
            label: "Foundation Material",
            inputType: "radio",
            options: [
              { value: "poured", label: "Poured Concrete" },
              { value: "block", label: "Concrete Block" },
              { value: "icf", label: "Insulated Concrete Forms (ICF)" },
            ],
          },
          {
            attributeName: "waterproofing",
            label: "Waterproofing",
            inputType: "checkbox",
            options: [
              { value: "membrane", label: "Membrane" },
              { value: "coating", label: "Coating" },
              { value: "drainage", label: "Drainage System" },
            ],
          },
        ],
      },
      {
        sectionName: "Framing",
        fields: [
          {
            attributeName: "framingMaterial",
            label: "Framing Material",
            inputType: "radio",
            options: [
              { value: "wood", label: "Wood" },
              { value: "steel", label: "Steel" },
            ],
          },
          {
            attributeName: "roofTrussType",
            label: "Roof Truss Type",
            inputType: "text",
          },
          {
            attributeName: "sheathing",
            label: "Sheathing",
            inputType: "radio",
            options: [
              { value: "osb", label: "OSB" },
              { value: "plywood", label: "Plywood" },
            ],
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Exterior Finishes",
    sections: [
      {
        sectionName: "Roofing",
        fields: [
          {
            attributeName: "roofingMaterial",
            label: "Roofing Material",
            inputType: "radio",
            options: [
              { value: "asphalt", label: "Asphalt Shingles" },
              { value: "metal", label: "Metal" },
              { value: "tile", label: "Tile" },
            ],
          },
          {
            attributeName: "gutters",
            label: "Gutters",
            inputType: "radio",
            options: [
              { value: "aluminum", label: "Aluminum" },
              { value: "steel", label: "Steel" },
              { value: "none", label: "None" },
            ],
          },
        ],
      },
      {
        sectionName: "Siding",
        fields: [
          {
            attributeName: "sidingMaterial",
            label: "Siding Material",
            inputType: "radio",
            options: [
              { value: "vinyl", label: "Vinyl" },
              { value: "fiber_cement", label: "Fiber Cement" },
              { value: "brick", label: "Brick" },
              { value: "stone", label: "Stone" },
            ],
          },
          {
            attributeName: "exteriorTrim",
            label: "Exterior Trim",
            inputType: "text",
          },
        ],
      },
      {
        sectionName: "Windows & Doors",
        fields: [
          {
            attributeName: "windowType",
            label: "Window Type",
            inputType: "radio",
            options: [
              { value: "double_hung", label: "Double-Hung" },
              { value: "casement", label: "Casement" },
              { value: "slider", label: "Slider" },
            ],
          },
          {
            attributeName: "doorMaterial",
            label: "Front Door Material",
            inputType: "radio",
            options: [
              { value: "wood", label: "Wood" },
              { value: "fiberglass", label: "Fiberglass" },
              { value: "steel", label: "Steel" },
            ],
          },
        ],
      },
    ],
  },
  {
    projectId: 200001,
    title: "Landscaping & Outdoor",
    sections: [
      {
        sectionName: "Lawn",
        fields: [
          {
            attributeName: "soddingArea",
            label: "Sodding Area (sq ft)",
            inputType: "number",
          },
          {
            attributeName: "sprinklerSystem",
            label: "Sprinkler System",
            inputType: "radio",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
      {
        sectionName: "Hardscaping",
        fields: [
          {
            attributeName: "patioMaterial",
            label: "Patio Material",
            inputType: "radio",
            options: [
              { value: "concrete", label: "Concrete" },
              { value: "pavers", label: "Pavers" },
              { value: "wood", label: "Wood Deck" },
            ],
          },
          {
            attributeName: "patioSize",
            label: "Patio Size (sq ft)",
            inputType: "number",
          },
        ],
      },
      {
        sectionName: "Fencing",
        fields: [
          {
            attributeName: "fenceType",
            label: "Fence Type",
            inputType: "radio",
            options: [
              { value: "wood", label: "Wood" },
              { value: "vinyl", label: "Vinyl" },
              { value: "chain_link", label: "Chain Link" },
            ],
          },
          {
            attributeName: "fenceLength",
            label: "Fence Length (ft)",
            inputType: "number",
          },
        ],
      },
    ],
  },
];

export default specifications;
