// Extend jQuery to jump to a selector in the same repeater row; helps with traversal
//   @param fieldName: Which ('views' vs. 'annotations') repeater row should we
//   stay within? This is useful because repeater rows are nested.
jQuery.fn.rowSibling = function(fieldName, selector) {
  var rows = jQuery('[data-field_name="'+fieldName+'"] > div.repeater > table > tbody > tr.row');
  return this.closest(rows).find(selector);
}

tdx_json = JSON.parse('{"1312":[{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A1_3739.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A2_3751.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A3_3763.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A4_3776.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A5_3673.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A5_3673.tif","max_width":13473,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A6_3691.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A7_3710.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_A8_3724.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B1_3740.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B1_3740.tif","max_width":14275,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B2_3752.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B3_3764.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B4_3777.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B5_3675.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B6_3693.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B7_3711.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_B8_3725.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C1_3741.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C1_3741.tif","max_width":14544,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C2_3753.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C3_3765.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C4_3778.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C5_3676.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C6_3694.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C7_3712.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_C8_3726.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D1_3742.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D1_3742.tif","max_width":14752,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D2_3754.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D3_3766.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D4_3779.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D5_3677.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D6_3695.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D7_3713.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_D8_3727.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E1_3743.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E1_3743.tif","max_width":14656,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E2_3755.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E3_3767.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E4_3780.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E5_3678.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E6_3696.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E7_3714.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_E8_3728.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_EF3_3768.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_EF7_3715.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_EF8_3729.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F1_3744.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F2_3756.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F3_3769.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F4_3781.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F5_3681.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F6_3702.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F7_3716.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F8_3730.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_F8_3730.tif","max_width":14536,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G1_3745.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G1_3745.tif","max_width":14760,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G2_3757.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G3_3770.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G4_3782.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G5_3683.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G6_3703.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G7_3717.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_G8_3731.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_GH7_3718.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H1_3746.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H1_3746.tif","max_width":14688,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H2_3758.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H3_3771.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H4_3783.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H5_3684.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H6_3704.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H7_3719.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_H8_3732.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I1_3747.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I1_3747.tif","max_width":15000,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I2_3759.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I3_3772.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I4_3784.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I5_3685.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I6_3705.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I7_3720.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_I8_3733.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J1_3748.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J1_3748.tif","max_width":15000,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J2_3760.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J3_3773.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J4_3785.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J5_3687.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J6_3706.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J7_3721.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_J8_3734.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K1_3749.tif","max_width":14712,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K2_3761.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K3_3774.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K4_3786.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K5_3688.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K6_3708.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K7_3722.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_K8_3737.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L1_3749.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L1_3750.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L1_3750.tif","max_width":15000,"max_height":3000},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L2_3762.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L3_3775.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L4_3787.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L5_3689.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L5_3690.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L6_3709.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L7_3723.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/111103_mia348_L8_3738.jpg","max_width":3744,"max_height":5616},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/19031231_mia341_1844.tif","max_width":4080,"max_height":4078},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000072.tif","max_width":5287,"max_height":9799},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000074.tif","max_width":5287,"max_height":9799},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000075.tif","max_width":5654,"max_height":9976},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000076.tif","max_width":5654,"max_height":9976},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000077.tif","max_width":5837,"max_height":10258},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000079.tif","max_width":5837,"max_height":10258},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000082.tif","max_width":5837,"max_height":10258},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000084.tif","max_width":5837,"max_height":10258},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000085.tif","max_width":5837,"max_height":10258},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000086.tif","max_width":5837,"max_height":10166},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000087.tif","max_width":5837,"max_height":9870},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000088.tif","max_width":5837,"max_height":9870},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000089.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000090.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000091.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000092.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000093.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000094.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000095.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000096.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000097.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000098.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000099.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000100.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000101.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000102.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000103.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000104.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000105.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000106.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000107.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000108.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000109.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000110.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000111.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000112.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000113.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000114.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000115.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000116.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000117.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000118.jpg","max_width":5901,"max_height":8932},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000120.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000121.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000122.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000123.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000124.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000125.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000126.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000127.jpg","max_width":5076,"max_height":8410},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000128.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000129.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000131.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000132.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000133.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000135.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000136.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000137.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000138.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000139.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000140.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000141.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000142.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000143.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000144.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000145.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000146.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000148.jpg","max_width":5076,"max_height":8974},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000152.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000153.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000154.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000155.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000156.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000157.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000158.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000159.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000160.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000162.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000163.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000165.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000166.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000168.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000169.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000170.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000171.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000172.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000173.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000174.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000175.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000176.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000177.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000178.jpg","max_width":5076,"max_height":9214},{"image":"http:\/\/api.artsmia.org\/images\/1312\/small\/mia_6000180.jpg","max_width":5076,"max_height":9214}],"5756":[{"image":"http:\/\/api.artsmia.org\/images\/5756\/small\/20001214_mia341_4894.tif","max_width":1891,"max_height":2648}],"5568":[{"image":"http:\/\/api.artsmia.org\/images\/5568\/small\/20020702_mia341_1808.tif","max_width":4080,"max_height":4076}],"45269":[{"image":"http:\/\/api.artsmia.org\/images\/45269\/small\/20031231_mia341_0718.tif","max_width":2032,"max_height":3056}],"13213":[{"image":"http:\/\/api.artsmia.org\/images\/13213\/small\/mia_16650b.tif","max_width":2236,"max_height":1920},{"image":"http:\/\/api.artsmia.org\/images\/13213\/small\/PCD20000427_4542_IMG0023.tif","max_width":2910,"max_height":3360}],"13214":[{"image":"http:\/\/api.artsmia.org\/images\/13214\/small\/mia_16650b_001.tif","max_width":2236,"max_height":1920},{"image":"http:\/\/api.artsmia.org\/images\/13214\/small\/PCD20000427_4542_IMG0023_001.tif","max_width":2910,"max_height":3360}],"1195":[{"image":"http:\/\/api.artsmia.org\/images\/1195\/small\/mia_2007975.tif","max_width":3508,"max_height":4462}],"1937":[{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009434.tif","max_width":4014,"max_height":4870},{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009435.tif","max_width":4014,"max_height":4899},{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009438.tif","max_width":4014,"max_height":4870},{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009440.tif","max_width":4014,"max_height":4757},{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009443.tif","max_width":4014,"max_height":4631},{"image":"http:\/\/api.artsmia.org\/images\/1937\/small\/mia_2009446.tif","max_width":4014,"max_height":4693}],"3183":[{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009840.tif","max_width":2612,"max_height":5236},{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009841.tif","max_width":2457,"max_height":5250},{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009845.tif","max_width":2550,"max_height":5216},{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009848.tif","max_width":2759,"max_height":5113},{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009851.tif","max_width":2533,"max_height":5080},{"image":"http:\/\/api.artsmia.org\/images\/3183\/small\/mia_2009855.tif","max_width":2929,"max_height":5071}],"97":[{"image":"http:\/\/api.artsmia.org\/images\/97\/small\/mia_2022753.tif","max_width":3065,"max_height":5025},{"image":"http:\/\/api.artsmia.org\/images\/97\/small\/mia_2167b.tif","max_width":620,"max_height":1920}],"3778":[{"image":"http:\/\/api.artsmia.org\/images\/3778\/small\/mia_31390a.tif","max_width":5072,"max_height":3966},{"image":"http:\/\/api.artsmia.org\/images\/3778\/small\/PCD19980109_3814_IMG0023.tif","max_width":3986,"max_height":5105}],"102200":[{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001407.tif","max_width":5422,"max_height":6968},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001409.tif","max_width":5422,"max_height":6968},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001412.tif","max_width":5422,"max_height":6968},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001413.tif","max_width":5422,"max_height":6968},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001415.tif","max_width":5422,"max_height":6714},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001417.tif","max_width":5422,"max_height":6834},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001419.tif","max_width":5422,"max_height":6825},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001421.tif","max_width":5422,"max_height":6755},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001422.tif","max_width":5357,"max_height":3750},{"image":"http:\/\/api.artsmia.org\/images\/102200\/small\/mia_4001424.tif","max_width":7230,"max_height":5428}],"1358":[{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002270.tif","max_width":6874,"max_height":5022},{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002279.tif","max_width":6926,"max_height":5022},{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002285.tif","max_width":4948,"max_height":5980},{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002290.tif","max_width":4616,"max_height":6758},{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002294.tif","max_width":4736,"max_height":6688},{"image":"http:\/\/api.artsmia.org\/images\/1358\/small\/mia_4002295.tif","max_width":4736,"max_height":6688}],"1854":[{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002302.tif","max_width":4239,"max_height":5959},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002306.tif","max_width":4776,"max_height":6242},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002308.tif","max_width":4612,"max_height":5916},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002310.tif","max_width":4420,"max_height":5916},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002312.tif","max_width":4692,"max_height":5880},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002313.tif","max_width":4800,"max_height":5916},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002314.tif","max_width":4880,"max_height":5822},{"image":"http:\/\/api.artsmia.org\/images\/1854\/small\/mia_4002316.tif","max_width":4578,"max_height":5752}],"108767":[{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015364.tif","max_width":6048,"max_height":3556},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015365.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015366.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015367.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015368.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015369.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015370.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015372.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015373.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015374.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015375.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015376.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015377.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015378.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015382.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015383.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015384.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015385.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015386.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015387.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015388.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015389.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015390.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015391.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015392.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015393.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015395.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015396.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015397.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015398.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015399.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015400.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015401.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015402.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015403.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015404.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015405.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015406.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015407.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015408.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015409.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015410.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015411.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015413.tif","max_width":2401,"max_height":3149},{"image":"http:\/\/api.artsmia.org\/images\/108767\/small\/mia_5015414.tif","max_width":2401,"max_height":3149}],"4866":[{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021120.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021122.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021124.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021127.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021128.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021130.tif","max_width":4561,"max_height":6728},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021132.tif","max_width":4738,"max_height":6244},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021133.tif","max_width":4670,"max_height":6230},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021138.tif","max_width":3777,"max_height":3928},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021139.tif","max_width":3777,"max_height":3928},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021140.tif","max_width":3777,"max_height":3928},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021141.tif","max_width":3777,"max_height":3928},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021142.tif","max_width":3777,"max_height":3928},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021143.tif","max_width":4103,"max_height":3908},{"image":"http:\/\/api.artsmia.org\/images\/4866\/small\/mia_5021144.tif","max_width":4103,"max_height":3908}],"111099":[{"image":"http:\/\/api.artsmia.org\/images\/111099\/small\/mia_5022432.tif","max_width":4190,"max_height":4812},{"image":"http:\/\/api.artsmia.org\/images\/111099\/small\/mia_5022433.tif","max_width":4190,"max_height":4812},{"image":"http:\/\/api.artsmia.org\/images\/111099\/small\/mia_5022435.tif","max_width":4190,"max_height":4812},{"image":"http:\/\/api.artsmia.org\/images\/111099\/small\/mia_5022436.tif","max_width":4190,"max_height":4812},{"image":"http:\/\/api.artsmia.org\/images\/111099\/small\/mia_5022437.tif","max_width":6797,"max_height":5350}],"30326":[{"image":"http:\/\/api.artsmia.org\/images\/30326\/small\/mia_5029236.tif","max_width":3861,"max_height":2978},{"image":"http:\/\/api.artsmia.org\/images\/30326\/small\/mia_5029237.tif","max_width":3861,"max_height":2978},{"image":"http:\/\/api.artsmia.org\/images\/30326\/small\/mia_5029238.tif","max_width":2476,"max_height":2588},{"image":"http:\/\/api.artsmia.org\/images\/30326\/small\/mia_5029239.tif","max_width":2476,"max_height":2588},{"image":"http:\/\/api.artsmia.org\/images\/30326\/small\/mia_5029240.tif","max_width":3616,"max_height":2468}],"115514":[{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_5034471.tif","max_width":5997,"max_height":4997},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_5034472.tif","max_width":5997,"max_height":4997},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_6004807.tif","max_width":8591,"max_height":7159},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_6004810.tif","max_width":7111,"max_height":7166},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_6004817.tif","max_width":7718,"max_height":7189},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_6004823.tif","max_width":7718,"max_height":7189},{"image":"http:\/\/api.artsmia.org\/images\/115514\/small\/mia_6004824.tif","max_width":7718,"max_height":7189}],"115320":[{"image":"http:\/\/api.artsmia.org\/images\/115320\/small\/mia_5036291.tif","max_width":4074,"max_height":5236},{"image":"http:\/\/api.artsmia.org\/images\/115320\/small\/mia_5036293.tif","max_width":3826,"max_height":5223}],"114833":[{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036469.tif","max_width":3639,"max_height":5262},{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036472.tif","max_width":3639,"max_height":5262},{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036475.tif","max_width":3639,"max_height":5359},{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036476.tif","max_width":3639,"max_height":5359},{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036478.tif","max_width":3639,"max_height":5327},{"image":"http:\/\/api.artsmia.org\/images\/114833\/small\/mia_5036480.tif","max_width":3639,"max_height":5327}],"111088":[{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036668.tif","max_width":5964,"max_height":4246},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036671.tif","max_width":5277,"max_height":5853},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036672.tif","max_width":6479,"max_height":4660},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036673.tif","max_width":6389,"max_height":4372},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036674.tif","max_width":5170,"max_height":5608},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036676.tif","max_width":5196,"max_height":5955},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036678.tif","max_width":5301,"max_height":6661},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036679.tif","max_width":5349,"max_height":6632},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036680.tif","max_width":6711,"max_height":4962},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036681.tif","max_width":6404,"max_height":4579},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036682.tif","max_width":5740,"max_height":5170},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036683.tif","max_width":6789,"max_height":5173},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036684.tif","max_width":6864,"max_height":5186},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036685.tif","max_width":6520,"max_height":4896},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036686.tif","max_width":6308,"max_height":3949},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036688.tif","max_width":6447,"max_height":5104},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036689.tif","max_width":6517,"max_height":3932},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036690.tif","max_width":6522,"max_height":4501},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036692.tif","max_width":5258,"max_height":3340},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036693.tif","max_width":6709,"max_height":5193},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_5036694.tif","max_width":5412,"max_height":7216},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_6008659.tif","max_width":8260,"max_height":5347},{"image":"http:\/\/api.artsmia.org\/images\/111088\/small\/mia_6008660.tif","max_width":8688,"max_height":5427}],"113136":[{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001890.tif","max_width":3278,"max_height":6615},{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001892.tif","max_width":3278,"max_height":6615},{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001894.tif","max_width":3278,"max_height":6615},{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001901.tif","max_width":3278,"max_height":6615},{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001903.tif","max_width":3278,"max_height":6615},{"image":"http:\/\/api.artsmia.org\/images\/113136\/small\/mia_6001904.tif","max_width":3278,"max_height":6382}],"111879":[{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004485.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004485_Final.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004487.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004488.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004489.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004493.tif","max_width":5762,"max_height":8959},{"image":"http:\/\/api.artsmia.org\/images\/111879\/small\/mia_6004495.tif","max_width":5762,"max_height":8959}],"12111":[{"image":"http:\/\/api.artsmia.org\/images\/12111\/small\/PCD19991028_2609_IMG0026.tif","max_width":3788,"max_height":4602}]}')

// TDX Object
tdx = {
  annotations: {
    init: function(){
      // Rebuild annotation pins on load
      jQuery('[data-field_name="annotations"] tr.row').each(function(index, element){
        return
        var $element = jQuery(element);
        var percentX = $element.find('[data-field_name=x] input').val();
        var percentY = $element.find('[data-field_name=y] input').val();
        var $imgContainer = $element.rowSibling('views', 'div.tdx_selected_image_wrap');
        var $img = $imgContainer.find('img.tdx_selected_image');
        var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
        var annotationIndex = $element.index()+1;
        $element.attr('data-annotation_id', annotationID);
        $imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
        tdx.annotations.makeDraggable(annotationID);
      });
      // Handle events
      jQuery(document).on('click', 'img.tdx_selected_image', function(e){
        var annotationID = 'pin_' + Date.now() + '_' + Math.floor((Math.random()*1000)+1);
        tdx.annotations.addPin(e, annotationID);
        tdx.annotations.makeDraggable(annotationID);
        return false;
      });
      jQuery(document).on('click', 'div.pin', function(e){
        jQuery(e.target).next('div.deletePin').toggleClass('visible');
        return false;
      });
      jQuery(document).on('click', 'a.deletePinLink', function(e){
        tdx.annotations.deletePin(e);
        return false;
      });
      jQuery(document).on('acf/sortable_stop_repeater', function(e, dragged){
        tdx.annotations.updateOrder(e, dragged);
        return false;
      });
    },
    // Calculate position value, create and place pin, update values in hidden input
    addPin: function(e, annotationID){
      var $img = jQuery(e.target);
      acf.fields.repeater.add_row($img.rowSibling('views', 'div.repeater'));
      var $imgContainer = $img.closest('div.tdx_selected_image_wrap');
      var $linkedRow = $img.rowSibling('views', '[data-field_name="annotations"] tr.row').last();
      var annotationIndex = $linkedRow.find('td.order').html();
      var $xField = $linkedRow.find('[data-field_name=x] input');
      var $yField = $linkedRow.find('[data-field_name=y] input');
      var clickX = e.pageX-$imgContainer.offset().left;
      var clickY = e.pageY-$imgContainer.offset().top;
      var pinX = clickX - 7;
      var pinY = clickY - 7;
      var percentX = (pinX/$img.width()) * 100;
      var percentY = (pinY/$img.height()) * 100;
      $linkedRow.attr('data-annotation_id', annotationID);
      // This could be its own method
      $imgContainer.append('<div class="pin" data-annotation_id="'+annotationID+'" style="left:'+percentX+'%; top:'+percentY+'%;">'+annotationIndex+'</div><div class="deletePin" style="left:'+percentX+'%; top:'+percentY+'%;" data-annotation_id="'+annotationID+'"><a href="javascript:;" class="deletePinLink">Delete</a></div>');
      $xField.val(percentX);
      $yField.val(percentY);
    },
    // Delete pin and associated row
    deletePin: function(e) {
      var annotationID = jQuery(e.target).closest('div.deletePin').prev('div.pin').data('annotation_id');
      var $linkedRow = jQuery(e.target).rowSibling('views','tr[data-annotation_id='+annotationID+']').first();
      acf.fields.repeater.remove_row($linkedRow);
      var rowgone = window.setInterval(function(){
        if(!jQuery(e.target).rowSibling('views','tr[data-annotation_id='+annotationID+']').length){
          var $arbitraryRow = jQuery(e.target).rowSibling('views','[data-field_name="annotations"] tr.row').first();
          jQuery(e.target).closest('div.deletePin').prev('div.pin').remove();
          jQuery(e.target).closest('div.deletePin').remove();
          if($arbitraryRow){
            jQuery(document).trigger('acf/sortable_stop_repeater', $arbitraryRow);
          }
          window.clearInterval(rowgone);
        }
      }, 100);
    },
    // Apply jQuery.draggable to a new pin.
    makeDraggable: function(annotationID){
      jQuery('div.pin[data-annotation_id='+annotationID+']').draggable({
        addClasses: false,
        containment:'parent',
        stop: function(e, ui){
          jQuery('div.deletePin[data-annotation_id='+annotationID+']').css({
            'top': ui.helper.css('top'),
            'left': ui.helper.css('left')
          });
          tdx.annotations.updateLocation(ui.helper);
        }
      });
    },
    // Remove all pins and their associated rows
    clearPins: function(e){
      jQuery(e.target).rowSibling('views','[data-field_name=annotations] tr.row').remove();
      jQuery(e.target).rowSibling('views','div.pin, div.deletePin').remove();
    },
    // Update fields with new coordinates of a dragged pin.
    updateLocation: function($pin){
      var $img = $pin.rowSibling('views','img.tdx_selected_image');
      var annotationID = $pin.data('annotation_id')
      var $linkedRow = $pin.rowSibling('views','[data-annotation_id='+annotationID+']');
      var $xField = $linkedRow.find('[data-field_name=x] input');
      var $yField = $linkedRow.find('[data-field_name=y] input');
      var pinX = $pin.position().left;
      var pinY = $pin.position().top;
      var percentX = (pinX/$img.width()) * 100;
      var percentY = (pinY/$img.height()) * 100;
      $xField.val(percentX);
      $yField.val(percentY);
    },
    // Update pin labels on annotation row sort
    updateOrder: function(e, dragged){
      $pins = jQuery(dragged).rowSibling('views','div.pin');
      $pins.each(function(index, element){
        var $element = jQuery(element);
        var annotationID = $element.data('annotation_id');
        var newIndex = jQuery('tr[data-annotation_id='+annotationID+']').index();
        $element.html(newIndex+1);
      });
    }
  },
  images: {
    init: function(){
      // Create main image wrapper and buttons for stories and objects
      jQuery('[data-field_name="img_link"], [data-field_name="img_link_b"]').append('\
        <div class="tdx_selected_image_wrap"><div class="tdx_loading" style="display:none;"></div></div>\
          <div class="tdx_image_buttons">\
          <a href="#" class="button button-primary tdx_select_image" style="display:none;">Select Image</a>\
          <a href="#" class="button button-primary tdx_change_image" style="display:none;">Change Image</a>\
          <a href="#" class="button button-primary tdx_remove_image" style="display:none;">Remove Image</a>\
          </div>'
        ).each(function(index, element){
      cell = jQuery(element)
      var objid = cell.find('input').val();
      if(objid){
        tdx.images.loadZoomerIntoCell(cell, objid)
      } else {
        jQuery(element).find('a.tdx_select_image').show();
      }
    });
    // Add "Insert Image" buttons to all WYSIWYGs
    jQuery('td.field_type-wysiwyg').prepend('<a href="#" class="button tdx_insert_image">Insert Image</a>');
    // Handle events
    jQuery(document).on('click', 'a.tdx_select_image', function(e){
      tdx.images.targetType = 'field';
      tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
      tdx.images.open(e);
      return false;
    });
    jQuery(document).on('click', 'a.tdx_change_image', function(e){
      tdx.images.reset(e);
      tdx.images.targetType = 'field';
      tdx.images.targetFieldID = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]').find('input').attr('id');
      tdx.images.open(e);
      return false;
    });
    jQuery(document).on('click', 'a.tdx_insert_image', function(e){
      tdx.images.targetType = 'wysiwyg';
      // Update active editor
      var thisTinyMCE = jQuery(e.target).rowSibling('annotations','textarea.wp-editor-area').attr('id');
      tinyMCE.get(thisTinyMCE).focus();
      tdx.images.open(e);
      return false;
    });
    jQuery(document).on('click', 'a.tdx_remove_image', function(e){
      tdx.images.reset(e);
      return false;
    });
    jQuery(document).on('click', 'div.tdx_images_close', function(e){
      tdx.images.close(e);
      return false;
    });
    // Weird one - actually clicking a span or p.thumb-caption, so this is easier
    jQuery(document).on('click', function(e){
      if(jQuery(e.target).closest('a.tdx_image').length){
        tdx.images.selectImage(e);
        return false;
      }
    });
  },
  // Launch UI and get images
  open: function(e){
    objects = tdx_json
    var imageCount = 0, loaded = 0
    jQuery.map(tdx_json, function(views) { imageCount += views.length })
    jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeIn(250);
    jQuery.map(tdx_json, function(views) {
      jQuery.map(views, function(view) {
        var view = view,
          id = view.image.match(/images\/(\d+)/)[1],
          imageName = view.image.match(/small\/(.*).(tif|jpg)/)[1]

        jQuery('#tdx_images').append('\
          <a href="#" data-objid="'+imageName+'" class="tdx_image">\
            <div class="object-thumb-wrap">\
              <div class="object-thumb">\
                <img src="'+view.image+'" id="tdx_pickable_image_'+id+'" />\
                <p class="thumb-caption"></p>\
              </div>\
            </div>\
          </a>'
        );

        jQuery('#tdx_pickable_image_'+id).on('load', function(e){
          jQuery(this).closest('a').fadeIn(250);
          loaded++;
          if(loaded >= imageCount - 50){
            jQuery('div.tdx_loading').fadeOut(250);
            jQuery('.tdx_image').fadeIn(250)
          }
        });
      })
    })
  },
  // Close UI and clear attributes
  close:function(){
    jQuery('#tdx_pick_image_overlay, #tdx_pick_image_ui').fadeOut(250);
    tdx.images.targetType = '';
    tdx.images.targetFieldID = '';
  },
  // Load a zoomer into the given cell
  loadZoomerIntoCell:function(cell, objid) {
    cell.find('div.tdx_loading').fadeIn(250);
    cell.find('div.tdx_selected_image_wrap').empty().append('<iframe src="http://artsmia.github.io/ag-sketches/#/edit/'+objid+'"></iframe>');
    cell.find('iframe').on('load', function(){
      cell.find('div.tdx_loading').fadeOut(250, function(){
        cell.find('img.tdx_selected_image').fadeIn(250);
      });
      cell.find('a.tdx_change_image, a.tdx_remove_image').fadeIn(250);
    });

    this.load_and_zoom_firebase_annotations(objid, cell)
  },

  load_and_zoom_firebase_annotations: function(objid, cell) {
    window.firebase = new Firebase('https://afrx.firebaseio.com/'+objid+'/notes2');
    firebase.on('child_added', function(snapshot) {
      var note = snapshot.val(),
      link = note.properties && note.properties.acf_link

      if(link) {
        console.log("linked", link)
      } else {
        console.log('unlinked')
        window.repeater = acf.fields.repeater.add_row(cell.rowSibling('views', '.repeater'))
        window.ann = cell.rowSibling('views', '[data-field_name="annotations"] tr.row').last();
        field_key = ann.find('[data-field_name=description]').attr('data-field_key')
        link = ann.find('.order').html()

        snapshot.ref().child('/properties').set(note.properties = {acf_link: link, field_key: field_key, image_id: objid})
        window.note = note
        tdx.images.minimap(objid, ann, note)
      }

      var correspondingNote = jQuery('[data-field_name="annotations"] .row .order:contains('+link+')')
      tdx.images.minimap(objid, correspondingNote, note)
    })
  },

  minimap: function(image_id, acf_row, note) {
    unique_key = note.properties.acf_link + note.properties.field_key
    map = jQuery('<div class="minimap"></div>').attr('id', unique_key)
    console.log('minimap', image_id, acf_row, note, unique_key, map)
    acf_row.next().find('tbody td[data-field_name=description]').prepend(map)
    console.log(acf_row)

    Zoomer.zoom_from_id(image_id, unique_key, note).then(function(z, container, _note) {
      var zoomed = z(container)
      var _geometry = L.GeoJSON.geometryToLayer(_note.geometry)
      setTimeout(function() {
        zoomed.map.fitBounds(_geometry)
        zoomed.map.addLayer(_geometry)
      }, 50)
    })
  },

  // Grab the image's object ID, update field, and append image in the proper place
  selectImage:function(e){
    var record = jQuery(e.target).closest('a.tdx_image');
    var objid = record.data('objid');
    // Insert into a field (i.e. main image of a story or object)
    if(tdx.images.targetType == 'field'){
      jQuery('#'+tdx.images.targetFieldID).val(objid);
      var thisCell = jQuery('#'+tdx.images.targetFieldID).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]');
      thisCell.find('a.tdx_select_image').hide();
      tdx.images.loadZoomerIntoCell(thisCell, objid);
    }
    // Insert into TinyMCE
    if(tdx.images.targetType == 'wysiwyg'){
      var el = tinyMCE.activeEditor.dom.create('img', {class:'embedded_image', src:'http://api.artsmia.org/images/'+objid+'/300/small.jpg'}, '');
      tinyMCE.activeEditor.selection.setNode(el);
    }
    tdx.images.close();
  },
  // Get rid of all pins and remove image
  reset:function(e){
    tdx.annotations.clearPins(e);
    var thisCell = jQuery(e.target).closest('[data-field_name="img_link"], [data-field_name="img_link_b"]');
    thisCell.find('img.tdx_selected_image').remove();
    thisCell.find('a.tdx_change_image, a.tdx_remove_image').hide();
    thisCell.find('a.tdx_select_image').show();
    thisCell.find('input').val('');
  },
  targetFieldID:'',
  targetType:''
}
}

jQuery(document).ready(function(){
  tdx.images.init();
  if(tdxGlobal.postType == 'object'){
    tdx.annotations.init();
  }
});
