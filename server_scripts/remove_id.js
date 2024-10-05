// priority: 10
onEvent('recipes', event => {
	event.remove([
		{id: 'compressedcreativity:mixing/brass_gilded_lapis_lazuli'},
		{id: 'compressedcreativity:mixing/brass_coated_upgrade_matrix'},
		{id: 'compressedcreativity:crafting/mechanical_visor_upgrade'}, // these are too long and mess item descriptions in-game.
		{id: 'compressedcreativity:sequenced_assembly/mesh_splashing'}, // both are relocated to have a shorter pathname!

		{id: 'tfc_ie_addon:crusher/sandstone/cut_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_black'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_brown'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_green'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_pink'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_red'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_white'},
		{id: 'tfc_ie_addon:crusher/sandstone/cut_yellow'},
		{id: 'tfc_ie_addon:crusher/sandstone/raw_yellow'},
		{id: 'tfc_ie_addon:crusher/sandstone/smooth_yellow'},

		{id: 'tfc_ie_addon:arc_furnace/insulating_glass_limonite'},
		{id: 'tfc_ie_addon:arc_furnace/insulating_glass_hematite'},
		{id: 'minecraft:ens_crying_obsidian'},
		{id: 'create:crafting/materials/brass_ingot_from_compacting'},
		{id: 'create:crafting/materials/brass_ingot_from_decompacting'},
		{id: 'minecraft:ens_andesite'},
		{id: 'minecraft:ens_diorite'},
		{id: 'minecraft:ens_granite'},
		{id: 'minecraft:ens_basalt'},
		{id: 'minecraft:ens_blackstone'},
		{id: 'minecraft:ens_cobblestone'},
		{id: 'tfc_ie_addon:refinery/milk_vinegar'},
		{id: 'tfc_ie_addon:crusher/olive'},
		{id: 'tfc_ie_addon:squeezer/olive'},
		{id: 'coralstfc:barrel/coral_powder'},
		{id: 'securitycraft:reinforced_redstone_lamp'},
		{id: 'create:crushing/diorite'},
		{id: 'create:crushing/tuff'},
		{id: 'create:crushing/asurine'},
		{id: 'create:crushing/crimsite'},
		{id: 'create:crushing/ochrum'},
		{id: 'create:crushing/veridium'},
		{id: 'create:crushing/diorite_recycling'},
		{id: 'create:crushing/tuff_recycling'},
		{id: 'create:crushing/asurine_recycling'},
		{id: 'create:crushing/crimsite_recycling'},
		{id: 'create:crushing/ochrum_recycling'},
		{id: 'create:crushing/veridium_recycling'},
		{id: 'tfc:quern/borax'},
		{id: 'tfc:quern/fluxstone'},
		{id: 'tfc_ie_addon:mold_sheet'},
		{id: 'tfc_ie_addon:mold_block'},
		{id: 'minecraft:crafting_table'},
		{id: 'pneumaticcraft:refinery'},
		{id: 'pneumaticcraft:refinery_output'},
		{id: 'mekanism:energized_smelter'},
		{id: 'mekanism:factory/basic/smelting'},
		{id: 'mekanism:factory/advanced/smelting'},
		{id: 'mekanism:factory/elite/smelting'},
		{id: 'mekanism:factory/ultimate/smelting'},
		{id: 'mekanism:factory/basic/sawing'},
		{id: 'mekanism:factory/advanced/sawing'},
		{id: 'mekanism:factory/elite/sawing'},
		{id: 'mekanism:factory/ultimate/sawing'},
		{id: 'immersiveengineering:blueprint/mold_wire'},
		{id: 'immersiveengineering:blueprint/mold_packing_9'},
		{id: 'tfc_ie_addon:blueprint/mold_sheet'},
		{id: 'tfc_ie_addon:blueprint/mold_block'},
		
		{id: 'minecraft:acacia_planks'},
		{id: 'choppingblock:acacia_planks'},
		{id: 'minecraft:birch_planks'},
		{id: 'choppingblock:birch_planks'},
		{id: 'minecraft:dark_oak_planks'},
		{id: 'choppingblock:dark_oak_planks'},
		{id: 'minecraft:jungle_planks'},
		{id: 'choppingblock:jungle_planks'},
		{id: 'minecraft:oak_planks'},
		{id: 'choppingblock:oak_planks'},
		{id: 'minecraft:spruce_planks'},
		{id: 'choppingblock:spruce_planks'},
		{id: 'tconstruct:smeltery/melting/metal/copper/cut_block'},
		{id: 'tconstruct:smeltery/melting/metal/copper/cut_slab'},
		{id: 'tconstruct:smeltery/casting/metal/gold/clock'},

		{id: 'bodyhygiene:oil_bucket_from_smoking'},
		{id: 'minecolonies:supplychestdeployer'},
		{id: 'minecolonies:supplycampdeployer'},
		{id: 'minecolonies:blockhutdeliverymaniron'},
		{id: 'minecolonies:blockhutfarmerstone'},
		{id: 'minecolonies:blockhutlumberjackstone'},
		{id: 'minecolonies:baked_pumpkin_pie_smoking'},
		{id: 'mekanism:reaction/wood_gasification/logs'},
		{id: 'mekanism:enriching/charcoal'},
		{id: 'mekanism:sawing/item_frame'},
		{id: 'minecraft:crimson_planks'},
		{id: 'minecraft:warped_planks'},
		{id: 'minecraft:baked_potato_from_smoking'},
		{id: 'minecraft:book'},
		{id: 'minecraft:honey_block'},
		{id: 'minecraft:soul_campfire'},
		{id: 'minecraft:diamond'},
		{id: 'minecraft:emerald'},
		{id: 'minecraft:stick'},
		{id: 'minecraft:lead'},
		{id: 'minecraft:cauldron'},
		{id: 'minecraft:stone_bricks'},
		{id: 'minecraft:ens_ancient_debris'},
		{id: 'minecraft:blaze_powder'},
		{id: 'minecraft:glistering_melon_slice'},
		{id: 'create:pressing/brass_ingot'},
		{id: 'create:pressing/sugar_cane'},
		{id: 'create:andesite_alloy'},
		{id: 'create:crushing/diorite'},
		{id: 'create:crushing/diamond_horse_armor'},
		{id: 'create:crushing/leather_horse_armor'},
		{id: 'create:crushing/iron_horse_armor'},
		{id: 'create:crushing/golden_horse_armor'},
		{id: 'create:milling/sugar_cane'},
		{id: 'create:milling/cobblestone'},
		{id: 'create:milling/saddle'},
		{id: 'create:blasting/zinc_ingot_from_crushed'},
		{id: 'create:smelting/zinc_ingot_from_crushed'},
		{id: 'create:blasting/ingot_silver_compat_immersiveengineering'},
		{id: 'create:smelting/ingot_silver_compat_immersiveengineering'},
		{id: 'create:blasting/ingot_nickel_compat_immersiveengineering'},
		{id: 'create:smelting/ingot_nickel_compat_immersiveengineering'},
		{id: 'create:splashing/mekanism/crushed_raw_lead'},
		{id: 'create:splashing/mekanism/crushed_raw_uranium'},
		{id: 'create:crafting/appliances/dough'},
		{id: 'createaddition:mixing/electrum'},
		{id: 'createaddition:crafting/electrum_ingot'},
		{id: 'createaddition:compat/immersiveengineering/crushing/steel_ingot'},
		{id: 'createaddition:compat/immersiveengineering/fabric_sail'},
		{id: 'createaddition:compat/immersiveengineering/constantan'},
		{id: 'createaddition:compat/immersiveengineering/electrum'},
		{id: 'createaddition:compat/tconstruct/slimesteel'},
		{id: 'createaddition:compat/tconstruct/manyullyn'},
		{id: 'createaddition:compat/tconstruct/rose_gold'},
		{id: 'createaddition:compat/tconstruct/hepatizon'},
		{id: 'createaddition:compat/tconstruct/queens_slime'},
		{id: 'createaddition:compat/tconstruct/tinkers_bronze'},
		{id: 'create_sa:magma_cream_recipe'},
		{id: 'createsifter:sifting/sand_zinc_mesh'},
		{id: 'createsifter:sifting/gravel_zinc_mesh'},
		{id: 'createsifter:sifting/gravel_brass_mesh'},
		{id: 'exnihilosequentia:fluid_on_top/ens_obsidian'},
		{id: 'exnihilosequentia:ens_aluminum_ingot_blast'},
		{id: 'exnihilosequentia:ens_lead_ingot_blast'},
		{id: 'exnihilosequentia:ens_zinc_ingot_blast'},
		{id: 'exnihilosequentia:ens_tin_ingot_blast'},
		{id: 'exnihilosequentia:ens_silver_ingot_blast'},
		{id: 'exnihilosequentia:ens_nickel_ingot_blast'},
		{id: 'exnihilosequentia:ens_platinum_ingot_blast'},
		{id: 'exnihilosequentia:ens_uranium_ingot_blast'},
		{id: 'htm:food/chicken'},
		//{id: 'htm:compat/farmersdelight/chicken_raw'},
		//{id: 'htm:compat/farmersdelight/chicken_cooked'},
		{id: 'farmersdelight:cutting/chicken'},
		{id: 'farmersdelight:cutting/cooked_chicken'},
		{id: 'immersiveengineering:crafting/gunpowder_from_dusts'},
		{id: 'immersiveengineering:crafting/drillhead_iron'},
		{id: 'immersiveengineering:crafting/plate_iron_hammering'},
		{id: 'immersiveengineering:crafting/stick_iron'},
		{id: 'immersiveengineering:crafting/stick_steel'},
		{id: 'immersiveengineering:crafting/stick_aluminum'},
		{id: 'immersiveengineering:crafting/paper_from_sawdust'},
		{id: 'immersiveengineering:crafting/ersatz_leather'},
		{id: 'immersiveengineering:alloysmelter/manyullyn'},
		{id: 'immersiveengineering:alloysmelter/brass'},
		{id: 'immersiveengineering:alloysmelter/constantan'},
		{id: 'immersiveengineering:alloysmelter/rose_gold'},
		{id: 'immersiveengineering:alloysmelter/electrum'},
		{id: 'immersiveengineering:alloysmelter/bronze'},
		{id: 'immersiveengineering:blastfurnace/steel'},
		{id: 'immersiveengineering:blastfurnace/steel_block'},
		{id: 'immersiveengineering:crafting/treated_wood_horizontal_from_packaged'},
		{id: 'immersiveengineering:squeezer/melon_seeds'},
		{id: 'immersiveengineering:squeezer/beetroot_seeds'},
		{id: 'immersiveengineering:squeezer/pumpkin_seeds'},
		{id: 'immersiveengineering:squeezer/hemp_seeds'},
		{id: 'immersiveengineering:squeezer/wheat_seeds'},
		{id: 'immersiveengineering:smelting/ingot_silver_from_blasting'},
		{id: 'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting'},
		{id: 'immersiveengineering:smelting/ingot_nickel_from_dust_from_blasting'},
		{id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'},
		{id: 'immersiveengineering:smelting/ingot_silver_from_blasting2'},
		{id: 'immersiveengineering:smelting/ingot_silver_from_blasting3'},
		{id: 'immersiveengineering:smelting/ingot_nickel_from_blasting'},
		{id: 'immersiveengineering:smelting/ingot_nickel_from_blasting2'},
		{id: 'immersiveengineering:smelting/ingot_nickel_from_blasting3'},
		{id: 'immersiveengineering:fermenter/beetroot'},
		{id: 'immersiveengineering:fermenter/glow_berries'},
		{id: 'immersiveengineering:fermenter/sweet_berries'},
		{id: 'immersiveengineering:fermenter/potato'},
		{id: 'immersiveengineering:fermenter/melon_slice'},
		{id: 'immersivepetroleum:ersatz_leather'},
		{id: 'immersiveposts:has_gold_rod'},
		{id: 'immersiveposts:has_copper_rod'},
		{id: 'immersiveposts:has_lead_rod'},
		{id: 'immersiveposts:has_silver_rod'},
		{id: 'immersiveposts:has_nickel_rod'},
		{id: 'immersiveposts:has_constantan_rod'},
		{id: 'immersiveposts:has_electrum_rod'},
		{id: 'immersiveposts:has_uranium_rod'},
		{id: 'firmalife:pot/beet_sugar'},
		{id: 'firmalife:crafting/empty_jar'},
		{id: 'mekanism:infusion_conversion/carbon/from_enriched'},
		{id: 'mekanism:infusion_conversion/carbon/from_charcoal_block'},
		{id: 'mekanism:infusion_conversion/carbon/from_charcoal'},
		//{id: 'mekanism:precison_sawmill'},
		{id: 'mekanism:paper'},
		{id: 'mekanism:rails'},
		{id: 'minecraft:iron_bars'},
		{id: 'minecraft:iron_door'},
		{id: 'minecraft:iron_trapdoor'},
		{id: 'minecraft:piston'},
		{id: 'minecraft:observer'},
		{id: 'minecraft:hopper'},
		{id: 'minecraft:minecart'},
		{id: 'minecraft:crossbow'},
		{id: 'minecraft:ender_eye'},
		{id: 'minecraft:golden_apple'},
		{id: 'minecraft:golden_carrot'},
		{id: 'minecraft:paper'},
		{id: 'minecraft:nether_brick'},
		{id: 'minecraft:glass_pane'},
		{id: 'minecraft:powered_rail'},
		{id: 'minecraft:detector_rail'},
		{id: 'minecraft:activator_rail'},
		{id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'},
		{id: 'pneumaticcraft:explosion_crafting/wheat_flour'},
		{id: 'pneumaticcraft:pressure_chamber/wheat_flour'},
		{id: 'pneumaticcraft:pressure_chamber/milk_to_slime_balls'},
		{id: 'pneumaticcraft:pressure_chamber_valve_x4'},
		{id: 'pneumaticcraft:pressure_chamber_valve_x1'},
		{id: 'pneumaticcraft:pressure_chamber_glass_x4'},
		{id: 'pneumaticcraft:pressure_chamber_glass_x1'},
		{id: 'pneumaticcraft:paper_from_tag_filter'},
		{id: 'pneumaticcraft:refinery/oil_2'},
		{id: 'pneumaticcraft:refinery/oil_3'},
		{id: 'pneumaticcraft:refinery/oil_4'},
		{id: 'pneumaticcraft:thermo_plant/lubricant_from_biodiesel'},
		{id: 'pneumaticcraft:thermo_plant/lubricant_from_diesel'},
		{id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'},
		{id: 'pneumaticcraft:thermo_plant/kerosene'},
		{id: 'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'},
		{id: 'pneumaticcraft:thermo_plant/ethanol_from_potato'},
		{id: 'pneumaticcraft:thermo_plant/ethanol_from_melon'},
		{id: 'refinedstorage:silicon'},
		{id: 'sewingkit:leather_sheet_from_rabbit_hide'},
		{id: 'supplementaries:sugar_cube_uncrafting'},
		{id: 'supplementaries:hanging_sign_oak'},
		{id: 'supplementaries:sign_post_oak'},
		{id: 'tconstruct:common/basalt_blast_furnace'},
		{id: 'tconstruct:common/gold_bars'},
		{id: 'tconstruct:common/glass/clear_glass_pane'},
		{id: 'tconstruct:common/slime/magma_cream'},
		{id: 'tconstruct:tables/book_substitute'},
		{id: 'tfc:crafting/dough/barley_dough_8'},
		{id: 'tfc:crafting/dough/barley_dough_7'},
		{id: 'tfc:crafting/dough/barley_dough_6'},
		{id: 'tfc:crafting/dough/barley_dough_5'},
		{id: 'tfc:crafting/dough/barley_dough_4'},
		{id: 'tfc:crafting/dough/barley_dough_3'},
		{id: 'tfc:crafting/dough/barley_dough_2'},
		{id: 'tfc:crafting/dough/barley_dough_1'},
		{id: 'tfc:crafting/dough/maize_dough_8'},
		{id: 'tfc:crafting/dough/maize_dough_7'},
		{id: 'tfc:crafting/dough/maize_dough_6'},
		{id: 'tfc:crafting/dough/maize_dough_5'},
		{id: 'tfc:crafting/dough/maize_dough_4'},
		{id: 'tfc:crafting/dough/maize_dough_3'},
		{id: 'tfc:crafting/dough/maize_dough_2'},
		{id: 'tfc:crafting/dough/maize_dough_1'},
		{id: 'tfc:crafting/dough/oat_dough_8'},
		{id: 'tfc:crafting/dough/oat_dough_7'},
		{id: 'tfc:crafting/dough/oat_dough_6'},
		{id: 'tfc:crafting/dough/oat_dough_5'},
		{id: 'tfc:crafting/dough/oat_dough_4'},
		{id: 'tfc:crafting/dough/oat_dough_3'},
		{id: 'tfc:crafting/dough/oat_dough_2'},
		{id: 'tfc:crafting/dough/oat_dough_1'},
		{id: 'tfc:crafting/dough/rye_dough_8'},
		{id: 'tfc:crafting/dough/rye_dough_7'},
		{id: 'tfc:crafting/dough/rye_dough_6'},
		{id: 'tfc:crafting/dough/rye_dough_5'},
		{id: 'tfc:crafting/dough/rye_dough_4'},
		{id: 'tfc:crafting/dough/rye_dough_3'},
		{id: 'tfc:crafting/dough/rye_dough_2'},
		{id: 'tfc:crafting/dough/rye_dough_1'},
		{id: 'tfc:crafting/dough/rice_dough_8'},
		{id: 'tfc:crafting/dough/rice_dough_7'},
		{id: 'tfc:crafting/dough/rice_dough_6'},
		{id: 'tfc:crafting/dough/rice_dough_5'},
		{id: 'tfc:crafting/dough/rice_dough_4'},
		{id: 'tfc:crafting/dough/rice_dough_3'},
		{id: 'tfc:crafting/dough/rice_dough_2'},
		{id: 'tfc:crafting/dough/rice_dough_1'},
		{id: 'tfc:crafting/dough/wheat_dough_8'},
		{id: 'tfc:crafting/dough/wheat_dough_7'},
		{id: 'tfc:crafting/dough/wheat_dough_6'},
		{id: 'tfc:crafting/dough/wheat_dough_5'},
		{id: 'tfc:crafting/dough/wheat_dough_4'},
		{id: 'tfc:crafting/dough/wheat_dough_3'},
		{id: 'tfc:crafting/dough/wheat_dough_2'},
		{id: 'tfc:crafting/dough/wheat_dough_1'},
		{id: 'tfc:crafting/vanilla/redstone/steel_hopper'},
		{id: 'tfc:crafting/paper'},
		{id: 'tfc:crafting/stick_from_bundle'},
		{id: 'tfc:leather_knapping/boots'},
		{id: 'tfc:leather_knapping/horse_armor'},
		{id: 'tfc:leather_knapping/chestplate'},
		{id: 'tfc:leather_knapping/helmet'},
		{id: 'tfc:leather_knapping/leggings'},
		{id: 'tfc:leather_knapping/saddle'},
		{id: 'tfc_ie_addon:crusher/salt'},
		{id: 'tfc_ie_addon:sawmill/acacia_log'},
		{id: 'tfc_ie_addon:sawmill/acacia_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/acacia_wood'},
		{id: 'tfc_ie_addon:sawmill/acacia_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/ash_log'},
		{id: 'tfc_ie_addon:sawmill/ash_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/ash_wood'},
		{id: 'tfc_ie_addon:sawmill/ash_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/aspen_log'},
		{id: 'tfc_ie_addon:sawmill/aspen_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/aspen_wood'},
		{id: 'tfc_ie_addon:sawmill/aspen_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/birch_log'},
		{id: 'tfc_ie_addon:sawmill/birch_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/birch_wood'},
		{id: 'tfc_ie_addon:sawmill/birch_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/blackwood_log'},
		{id: 'tfc_ie_addon:sawmill/blackwood_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/blackwood_wood'},
		{id: 'tfc_ie_addon:sawmill/blackwood_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/chestnut_log'},
		{id: 'tfc_ie_addon:sawmill/chestnut_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/chestnut_wood'},
		{id: 'tfc_ie_addon:sawmill/chestnut_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_log'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_wood'},
		{id: 'tfc_ie_addon:sawmill/douglas_fir_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/hickory_log'},
		{id: 'tfc_ie_addon:sawmill/hickory_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/hickory_wood'},
		{id: 'tfc_ie_addon:sawmill/hickory_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/kapok_log'},
		{id: 'tfc_ie_addon:sawmill/kapok_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/kapok_wood'},
		{id: 'tfc_ie_addon:sawmill/kapok_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/maple_log'},
		{id: 'tfc_ie_addon:sawmill/maple_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/maple_wood'},
		{id: 'tfc_ie_addon:sawmill/maple_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/oak_log'},
		{id: 'tfc_ie_addon:sawmill/oak_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/oak_wood'},
		{id: 'tfc_ie_addon:sawmill/oak_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/palm_log'},
		{id: 'tfc_ie_addon:sawmill/palm_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/palm_wood'},
		{id: 'tfc_ie_addon:sawmill/palm_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/pine_log'},
		{id: 'tfc_ie_addon:sawmill/pine_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/pine_wood'},
		{id: 'tfc_ie_addon:sawmill/pine_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/rosewood_log'},
		{id: 'tfc_ie_addon:sawmill/rosewood_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/rosewood_wood'},
		{id: 'tfc_ie_addon:sawmill/rosewood_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/sequoia_log'},
		{id: 'tfc_ie_addon:sawmill/sequoia_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/sequoia_wood'},
		{id: 'tfc_ie_addon:sawmill/sequoia_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/spruce_log'},
		{id: 'tfc_ie_addon:sawmill/spruce_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/spruce_wood'},
		{id: 'tfc_ie_addon:sawmill/spruce_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/sycamore_log'},
		{id: 'tfc_ie_addon:sawmill/sycamore_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/sycamore_wood'},
		{id: 'tfc_ie_addon:sawmill/sycamore_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_log'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_wood'},
		{id: 'tfc_ie_addon:sawmill/white_cedar_stripped_wood'},
		{id: 'tfc_ie_addon:sawmill/willow_log'},
		{id: 'tfc_ie_addon:sawmill/willow_stripped_log'},
		{id: 'tfc_ie_addon:sawmill/willow_wood'},
		{id: 'tfc_ie_addon:sawmill/willow_stripped_wood'},
		{id: 'tfc_ie_addon:squeezer/carrot'},
		{id: 'tfc_ie_addon:squeezer/cabbage'},
		{id: 'tfc_ie_addon:squeezer/tomato'},
		{id: 'tfc_ie_addon:squeezer/tomato'},
		{id: 'tfc_ie_addon:squeezer/sugarcane'},
		{id: 'tfc_ie_addon:squeezer/rice'},
		{id: 'tfc_ie_addon:squeezer/rye'},
		{id: 'tfc_ie_addon:squeezer/squash'},
		{id: 'tfc_ie_addon:squeezer/beet'},
		{id: 'tfc_ie_addon:squeezer/soybean'},
		{id: 'tfc_ie_addon:squeezer/green_bean'},
		{id: 'tfc_ie_addon:squeezer/barley'},
		{id: 'tfc_ie_addon:squeezer/oat'},
		{id: 'tfc_ie_addon:squeezer/garlic'},
		{id: 'tfc_ie_addon:squeezer/maize'},
		{id: 'tfc_ie_addon:squeezer/jute'},
		{id: 'tfc_ie_addon:squeezer/wheat'},
		{id: 'tfc_ie_addon:squeezer/potato'},
		{id: 'tfc_ie_addon:squeezer/onion'},
		{id: 'tfc_ie_addon:arc_furnace/steel'},
		{id: 'tfc_ie_addon:crafting/sheetmetal_steel'},
		{id: 'tfc_ie_addon:heating/hop_graphite_ingot'},
		{id: 'tfc_ie_addon:metalpress/steel_block'},
		{id: 'tfc_ie_addon:metalpress/uranium_block'},
		{id: 'tfc_ie_addon:metalpress/plate_wrought_iron'},
		{id: 'tconstruct:smeltery/alloys/molten_obsidian'},
		{id: 'tconstruct:smeltery/alloys/molten_obsidian_from_soup'},
		{id: 'tconstruct:smeltery/melting/metal/iron/ingot_1'},
		{id: 'tconstruct:smeltery/melting/metal/iron/ingot_2'},
		{id: 'tconstruct:smeltery/melting/metal/iron/ingot_4'},
		{id: 'tconstruct:smeltery/melting/metal/iron/ingot_5'},
		{id: 'tconstruct:smeltery/melting/metal/iron/bucket'},
		{id: 'tconstruct:smeltery/melting/metal/iron/small'},
		{id: 'tconstruct:smeltery/melting/metal/iron/weapon'},
		{id: 'tconstruct:smeltery/melting/metal/iron/crossbow'},
		{id: 'tconstruct:smeltery/melting/metal/iron/nugget_3'},
		{id: 'tconstruct:smeltery/melting/metal/gold/powered_rail'},
		{id: 'tconstruct:smeltery/melting/metal/gold/apple'},
		{id: 'tconstruct:smeltery/melting/metal/gold/produce'},
		{id: 'tconstruct:smeltery/melting/amethyst/spyglass'},
		{id: 'tconstruct:smeltery/seared/chute_retextured'},
		{id: 'tconstruct:smeltery/seared/drain_retextured'},
		{id: 'tconstruct:smeltery/seared/duct_retextured'},
		{id: 'untamedwilds:items/food_soup_turtle'},
		{id: 'untamedwilds:smelting/cooked_bear_meat'},
		{id: 'untamedwilds:smelting/cooked_bear_meat_campfire'},
		{id: 'untamedwilds:smelting/cooked_turtle_meat'},
		{id: 'untamedwilds:smelting/cooked_turtle_meat_campfire'},
		{id: 'untamedwilds:smelting/cooked_pachyderm_meat'},
		{id: 'untamedwilds:smelting/cooked_pachyderm_meat_campfire'}
	])
})
