# Mars Colony Building Models Guide

## Building Dimensions (in centimeters)

### Launch Pad
- Base: 400cm x 400cm (4m x 4m)
- Height: 150cm (1.5m)
- Features:
  - Landing Platform: 300cm x 300cm
  - Corner Lights: 20cm height
  - Safety Markings: 10cm width
  - Access Ramps: 100cm width, 15° incline

### Wind Turbine (Solar Plant)
- Base Foundation: 100cm x 100cm
- Total Height: 300cm
- Turbine Blade Length: 150cm
- Tower Diameter: 30cm
- Features:
  - Rotating Hub: 40cm diameter
  - Safety Lights: 10cm
  - Service Platform: 60cm x 60cm

### Iron Mine
- Base: 100cm x 100cm
- Total Height: 150cm
- Excavation Depth: 50cm
- Features:
  - Storage Silo: 60cm diameter, 120cm height
  - Conveyor System: 30cm width
  - Control Room: 40cm x 40cm x 30cm

### Hydroponic Farm
- Base: 100cm x 100cm
- Height: 80cm
- Features:
  - Growing Trays: 90cm x 90cm, 15cm depth
  - LED Arrays: 10cm height clearance
  - Water Circulation System: 5cm diameter pipes
  - Access Doors: 70cm x 180cm

### Radar Station
- Base: 80cm x 80cm
- Total Height: 200cm
- Dish Diameter: 100cm
- Features:
  - Rotating Platform: 70cm diameter
  - Control Unit: 40cm x 40cm x 30cm
  - Signal Lights: 5cm diameter
  - Support Struts: 10cm thickness

### AI Research Lab
- Base: 100cm x 100cm
- Height: 120cm
- Features:
  - Server Room: 40cm x 80cm x 100cm
  - Cooling Vents: 20cm x 5cm
  - Observation Windows: 60cm x 40cm
  - Access Panel: 50cm x 50cm

### Rocket Factory
- Base: 150cm x 150cm
- Height: 180cm
- Features:
  - Assembly Bay: 120cm x 120cm x 150cm
  - Crane System: 140cm height clearance
  - Loading Doors: 100cm x 160cm
  - Control Room: 50cm x 50cm x 40cm

### Storage Facility
- Base: 120cm x 120cm
- Height: 100cm
- Features:
  - Storage Units: 30cm x 30cm x 30cm
  - Loading Bay: 80cm width
  - Automated Retrieval System: 20cm tracks
  - Security Doors: 90cm x 90cm

## Technical Requirements

### Model Format
- File Format: GLB (preferred) or FBX
- Texture Resolution: 2K (2048x2048)
- UV Mapping: Single UV set
- Normal Maps: 1K minimum
- PBR Materials: Metallic/Roughness workflow

### Level of Detail (LOD)
- LOD0: Full detail (< 10m distance)
- LOD1: Medium detail (10-20m)
- LOD2: Low detail (> 20m)

### Material Properties
- Base Color (Albedo)
- Metallic Map
- Roughness Map
- Normal Map
- Ambient Occlusion
- Emission (where applicable)

### Performance Guidelines
- Maximum Triangle Count:
  - Simple Buildings: 5,000 triangles
  - Complex Buildings: 10,000 triangles
  - Detailed Buildings: 15,000 triangles
- Texture Memory Budget: 4K per building
- Draw Calls: Maximum 2 per building

## Animation Specifications

### Wind Turbine
- Blade Rotation: 15 RPM
- Yaw Adjustment: 90° per 5 seconds
- Startup/Shutdown: 2 seconds

### Radar Station
- Dish Rotation: 360° per 10 seconds
- Tilt Range: -5° to 90°
- Movement Smoothing: Ease in/out

### Factory Crane
- Horizontal Movement: 5 meters per second
- Vertical Movement: 2 meters per second
- Load Capacity: Visual deformation under 1000kg

## Environmental Integration

### Terrain Adaptation
- Maximum Slope: 15°
- Ground Contact: 5cm minimum
- Foundation Depth: 20cm

### Weather Effects
- Wind Deformation: None
- Rain Interaction: Water flow paths
- Dust Accumulation: Texture blend
- Heat Distortion: Around active machinery