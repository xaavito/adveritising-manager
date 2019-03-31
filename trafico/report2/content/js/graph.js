/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 650.0, "minX": 0.0, "maxY": 21805.0, "series": [{"data": [[0.0, 650.0], [0.1, 655.0], [0.2, 657.0], [0.3, 658.0], [0.4, 659.0], [0.5, 659.0], [0.6, 660.0], [0.7, 661.0], [0.8, 662.0], [0.9, 663.0], [1.0, 663.0], [1.1, 663.0], [1.2, 664.0], [1.3, 664.0], [1.4, 665.0], [1.5, 665.0], [1.6, 666.0], [1.7, 666.0], [1.8, 666.0], [1.9, 667.0], [2.0, 667.0], [2.1, 667.0], [2.2, 668.0], [2.3, 668.0], [2.4, 668.0], [2.5, 669.0], [2.6, 669.0], [2.7, 669.0], [2.8, 669.0], [2.9, 670.0], [3.0, 670.0], [3.1, 670.0], [3.2, 670.0], [3.3, 671.0], [3.4, 671.0], [3.5, 671.0], [3.6, 672.0], [3.7, 672.0], [3.8, 672.0], [3.9, 672.0], [4.0, 672.0], [4.1, 673.0], [4.2, 673.0], [4.3, 673.0], [4.4, 673.0], [4.5, 674.0], [4.6, 674.0], [4.7, 674.0], [4.8, 674.0], [4.9, 674.0], [5.0, 675.0], [5.1, 675.0], [5.2, 675.0], [5.3, 676.0], [5.4, 676.0], [5.5, 676.0], [5.6, 676.0], [5.7, 677.0], [5.8, 677.0], [5.9, 677.0], [6.0, 677.0], [6.1, 677.0], [6.2, 678.0], [6.3, 678.0], [6.4, 678.0], [6.5, 678.0], [6.6, 679.0], [6.7, 679.0], [6.8, 679.0], [6.9, 679.0], [7.0, 679.0], [7.1, 680.0], [7.2, 680.0], [7.3, 680.0], [7.4, 680.0], [7.5, 680.0], [7.6, 681.0], [7.7, 681.0], [7.8, 681.0], [7.9, 681.0], [8.0, 681.0], [8.1, 682.0], [8.2, 682.0], [8.3, 682.0], [8.4, 682.0], [8.5, 682.0], [8.6, 682.0], [8.7, 683.0], [8.8, 683.0], [8.9, 683.0], [9.0, 683.0], [9.1, 683.0], [9.2, 684.0], [9.3, 684.0], [9.4, 684.0], [9.5, 684.0], [9.6, 684.0], [9.7, 684.0], [9.8, 685.0], [9.9, 685.0], [10.0, 685.0], [10.1, 685.0], [10.2, 685.0], [10.3, 685.0], [10.4, 686.0], [10.5, 686.0], [10.6, 686.0], [10.7, 686.0], [10.8, 686.0], [10.9, 686.0], [11.0, 687.0], [11.1, 687.0], [11.2, 687.0], [11.3, 687.0], [11.4, 687.0], [11.5, 687.0], [11.6, 688.0], [11.7, 688.0], [11.8, 688.0], [11.9, 688.0], [12.0, 688.0], [12.1, 688.0], [12.2, 688.0], [12.3, 689.0], [12.4, 689.0], [12.5, 689.0], [12.6, 689.0], [12.7, 689.0], [12.8, 690.0], [12.9, 690.0], [13.0, 690.0], [13.1, 690.0], [13.2, 691.0], [13.3, 691.0], [13.4, 691.0], [13.5, 691.0], [13.6, 691.0], [13.7, 691.0], [13.8, 691.0], [13.9, 692.0], [14.0, 692.0], [14.1, 692.0], [14.2, 692.0], [14.3, 692.0], [14.4, 692.0], [14.5, 693.0], [14.6, 693.0], [14.7, 693.0], [14.8, 693.0], [14.9, 693.0], [15.0, 693.0], [15.1, 693.0], [15.2, 694.0], [15.3, 694.0], [15.4, 694.0], [15.5, 694.0], [15.6, 694.0], [15.7, 694.0], [15.8, 695.0], [15.9, 695.0], [16.0, 695.0], [16.1, 695.0], [16.2, 695.0], [16.3, 695.0], [16.4, 695.0], [16.5, 696.0], [16.6, 696.0], [16.7, 696.0], [16.8, 696.0], [16.9, 696.0], [17.0, 697.0], [17.1, 697.0], [17.2, 697.0], [17.3, 697.0], [17.4, 697.0], [17.5, 697.0], [17.6, 697.0], [17.7, 698.0], [17.8, 698.0], [17.9, 698.0], [18.0, 698.0], [18.1, 698.0], [18.2, 698.0], [18.3, 699.0], [18.4, 699.0], [18.5, 699.0], [18.6, 699.0], [18.7, 699.0], [18.8, 699.0], [18.9, 700.0], [19.0, 700.0], [19.1, 700.0], [19.2, 700.0], [19.3, 700.0], [19.4, 700.0], [19.5, 700.0], [19.6, 701.0], [19.7, 701.0], [19.8, 701.0], [19.9, 701.0], [20.0, 701.0], [20.1, 701.0], [20.2, 702.0], [20.3, 702.0], [20.4, 702.0], [20.5, 702.0], [20.6, 702.0], [20.7, 702.0], [20.8, 702.0], [20.9, 703.0], [21.0, 703.0], [21.1, 703.0], [21.2, 703.0], [21.3, 703.0], [21.4, 703.0], [21.5, 703.0], [21.6, 704.0], [21.7, 704.0], [21.8, 704.0], [21.9, 704.0], [22.0, 704.0], [22.1, 704.0], [22.2, 705.0], [22.3, 705.0], [22.4, 705.0], [22.5, 705.0], [22.6, 705.0], [22.7, 705.0], [22.8, 705.0], [22.9, 705.0], [23.0, 706.0], [23.1, 706.0], [23.2, 706.0], [23.3, 706.0], [23.4, 706.0], [23.5, 706.0], [23.6, 707.0], [23.7, 707.0], [23.8, 707.0], [23.9, 707.0], [24.0, 707.0], [24.1, 707.0], [24.2, 707.0], [24.3, 708.0], [24.4, 708.0], [24.5, 708.0], [24.6, 708.0], [24.7, 708.0], [24.8, 708.0], [24.9, 709.0], [25.0, 709.0], [25.1, 709.0], [25.2, 709.0], [25.3, 709.0], [25.4, 709.0], [25.5, 710.0], [25.6, 710.0], [25.7, 710.0], [25.8, 710.0], [25.9, 710.0], [26.0, 710.0], [26.1, 710.0], [26.2, 711.0], [26.3, 711.0], [26.4, 711.0], [26.5, 711.0], [26.6, 711.0], [26.7, 711.0], [26.8, 712.0], [26.9, 712.0], [27.0, 712.0], [27.1, 712.0], [27.2, 712.0], [27.3, 712.0], [27.4, 712.0], [27.5, 713.0], [27.6, 713.0], [27.7, 713.0], [27.8, 713.0], [27.9, 713.0], [28.0, 713.0], [28.1, 713.0], [28.2, 714.0], [28.3, 714.0], [28.4, 714.0], [28.5, 714.0], [28.6, 714.0], [28.7, 714.0], [28.8, 715.0], [28.9, 715.0], [29.0, 715.0], [29.1, 715.0], [29.2, 715.0], [29.3, 715.0], [29.4, 715.0], [29.5, 716.0], [29.6, 716.0], [29.7, 716.0], [29.8, 716.0], [29.9, 716.0], [30.0, 716.0], [30.1, 716.0], [30.2, 716.0], [30.3, 717.0], [30.4, 717.0], [30.5, 717.0], [30.6, 717.0], [30.7, 717.0], [30.8, 717.0], [30.9, 717.0], [31.0, 718.0], [31.1, 718.0], [31.2, 718.0], [31.3, 718.0], [31.4, 718.0], [31.5, 718.0], [31.6, 718.0], [31.7, 719.0], [31.8, 719.0], [31.9, 719.0], [32.0, 719.0], [32.1, 719.0], [32.2, 719.0], [32.3, 719.0], [32.4, 720.0], [32.5, 720.0], [32.6, 720.0], [32.7, 720.0], [32.8, 720.0], [32.9, 720.0], [33.0, 721.0], [33.1, 721.0], [33.2, 721.0], [33.3, 721.0], [33.4, 721.0], [33.5, 721.0], [33.6, 722.0], [33.7, 722.0], [33.8, 722.0], [33.9, 722.0], [34.0, 722.0], [34.1, 722.0], [34.2, 723.0], [34.3, 723.0], [34.4, 723.0], [34.5, 723.0], [34.6, 723.0], [34.7, 724.0], [34.8, 724.0], [34.9, 724.0], [35.0, 724.0], [35.1, 724.0], [35.2, 724.0], [35.3, 724.0], [35.4, 725.0], [35.5, 725.0], [35.6, 725.0], [35.7, 725.0], [35.8, 725.0], [35.9, 726.0], [36.0, 726.0], [36.1, 726.0], [36.2, 726.0], [36.3, 726.0], [36.4, 726.0], [36.5, 726.0], [36.6, 727.0], [36.7, 727.0], [36.8, 727.0], [36.9, 727.0], [37.0, 727.0], [37.1, 727.0], [37.2, 728.0], [37.3, 728.0], [37.4, 728.0], [37.5, 728.0], [37.6, 728.0], [37.7, 729.0], [37.8, 729.0], [37.9, 729.0], [38.0, 729.0], [38.1, 729.0], [38.2, 730.0], [38.3, 730.0], [38.4, 730.0], [38.5, 730.0], [38.6, 730.0], [38.7, 730.0], [38.8, 730.0], [38.9, 731.0], [39.0, 731.0], [39.1, 731.0], [39.2, 732.0], [39.3, 732.0], [39.4, 732.0], [39.5, 732.0], [39.6, 732.0], [39.7, 732.0], [39.8, 733.0], [39.9, 733.0], [40.0, 733.0], [40.1, 733.0], [40.2, 733.0], [40.3, 733.0], [40.4, 734.0], [40.5, 734.0], [40.6, 734.0], [40.7, 734.0], [40.8, 734.0], [40.9, 734.0], [41.0, 735.0], [41.1, 735.0], [41.2, 735.0], [41.3, 735.0], [41.4, 735.0], [41.5, 735.0], [41.6, 736.0], [41.7, 736.0], [41.8, 736.0], [41.9, 736.0], [42.0, 736.0], [42.1, 737.0], [42.2, 737.0], [42.3, 737.0], [42.4, 737.0], [42.5, 737.0], [42.6, 738.0], [42.7, 738.0], [42.8, 738.0], [42.9, 738.0], [43.0, 738.0], [43.1, 739.0], [43.2, 739.0], [43.3, 739.0], [43.4, 739.0], [43.5, 739.0], [43.6, 739.0], [43.7, 740.0], [43.8, 740.0], [43.9, 740.0], [44.0, 740.0], [44.1, 740.0], [44.2, 741.0], [44.3, 741.0], [44.4, 741.0], [44.5, 741.0], [44.6, 741.0], [44.7, 742.0], [44.8, 742.0], [44.9, 742.0], [45.0, 742.0], [45.1, 743.0], [45.2, 743.0], [45.3, 743.0], [45.4, 743.0], [45.5, 743.0], [45.6, 744.0], [45.7, 744.0], [45.8, 744.0], [45.9, 744.0], [46.0, 745.0], [46.1, 745.0], [46.2, 745.0], [46.3, 745.0], [46.4, 745.0], [46.5, 746.0], [46.6, 746.0], [46.7, 746.0], [46.8, 747.0], [46.9, 747.0], [47.0, 747.0], [47.1, 747.0], [47.2, 747.0], [47.3, 748.0], [47.4, 748.0], [47.5, 748.0], [47.6, 749.0], [47.7, 749.0], [47.8, 749.0], [47.9, 749.0], [48.0, 749.0], [48.1, 750.0], [48.2, 750.0], [48.3, 750.0], [48.4, 750.0], [48.5, 750.0], [48.6, 751.0], [48.7, 751.0], [48.8, 751.0], [48.9, 752.0], [49.0, 752.0], [49.1, 752.0], [49.2, 752.0], [49.3, 753.0], [49.4, 753.0], [49.5, 753.0], [49.6, 753.0], [49.7, 754.0], [49.8, 754.0], [49.9, 754.0], [50.0, 755.0], [50.1, 755.0], [50.2, 755.0], [50.3, 755.0], [50.4, 755.0], [50.5, 756.0], [50.6, 756.0], [50.7, 756.0], [50.8, 757.0], [50.9, 757.0], [51.0, 757.0], [51.1, 758.0], [51.2, 758.0], [51.3, 758.0], [51.4, 758.0], [51.5, 758.0], [51.6, 759.0], [51.7, 759.0], [51.8, 759.0], [51.9, 760.0], [52.0, 760.0], [52.1, 760.0], [52.2, 760.0], [52.3, 761.0], [52.4, 761.0], [52.5, 761.0], [52.6, 762.0], [52.7, 762.0], [52.8, 762.0], [52.9, 762.0], [53.0, 763.0], [53.1, 763.0], [53.2, 763.0], [53.3, 763.0], [53.4, 764.0], [53.5, 764.0], [53.6, 764.0], [53.7, 765.0], [53.8, 765.0], [53.9, 765.0], [54.0, 766.0], [54.1, 766.0], [54.2, 766.0], [54.3, 767.0], [54.4, 767.0], [54.5, 767.0], [54.6, 768.0], [54.7, 768.0], [54.8, 768.0], [54.9, 768.0], [55.0, 769.0], [55.1, 769.0], [55.2, 770.0], [55.3, 770.0], [55.4, 770.0], [55.5, 770.0], [55.6, 771.0], [55.7, 771.0], [55.8, 771.0], [55.9, 772.0], [56.0, 772.0], [56.1, 772.0], [56.2, 773.0], [56.3, 773.0], [56.4, 773.0], [56.5, 774.0], [56.6, 774.0], [56.7, 774.0], [56.8, 774.0], [56.9, 775.0], [57.0, 775.0], [57.1, 776.0], [57.2, 776.0], [57.3, 777.0], [57.4, 777.0], [57.5, 777.0], [57.6, 778.0], [57.7, 778.0], [57.8, 778.0], [57.9, 779.0], [58.0, 779.0], [58.1, 780.0], [58.2, 780.0], [58.3, 781.0], [58.4, 781.0], [58.5, 781.0], [58.6, 782.0], [58.7, 782.0], [58.8, 783.0], [58.9, 783.0], [59.0, 784.0], [59.1, 784.0], [59.2, 785.0], [59.3, 786.0], [59.4, 786.0], [59.5, 786.0], [59.6, 787.0], [59.7, 787.0], [59.8, 788.0], [59.9, 788.0], [60.0, 789.0], [60.1, 790.0], [60.2, 790.0], [60.3, 791.0], [60.4, 791.0], [60.5, 792.0], [60.6, 792.0], [60.7, 792.0], [60.8, 793.0], [60.9, 794.0], [61.0, 794.0], [61.1, 794.0], [61.2, 795.0], [61.3, 796.0], [61.4, 797.0], [61.5, 797.0], [61.6, 797.0], [61.7, 798.0], [61.8, 798.0], [61.9, 799.0], [62.0, 800.0], [62.1, 800.0], [62.2, 801.0], [62.3, 801.0], [62.4, 802.0], [62.5, 803.0], [62.6, 803.0], [62.7, 804.0], [62.8, 804.0], [62.9, 805.0], [63.0, 806.0], [63.1, 806.0], [63.2, 807.0], [63.3, 807.0], [63.4, 808.0], [63.5, 808.0], [63.6, 809.0], [63.7, 809.0], [63.8, 809.0], [63.9, 810.0], [64.0, 811.0], [64.1, 811.0], [64.2, 812.0], [64.3, 812.0], [64.4, 813.0], [64.5, 813.0], [64.6, 813.0], [64.7, 814.0], [64.8, 815.0], [64.9, 815.0], [65.0, 815.0], [65.1, 816.0], [65.2, 817.0], [65.3, 817.0], [65.4, 817.0], [65.5, 818.0], [65.6, 819.0], [65.7, 819.0], [65.8, 820.0], [65.9, 820.0], [66.0, 820.0], [66.1, 821.0], [66.2, 821.0], [66.3, 822.0], [66.4, 822.0], [66.5, 823.0], [66.6, 823.0], [66.7, 824.0], [66.8, 824.0], [66.9, 825.0], [67.0, 826.0], [67.1, 826.0], [67.2, 827.0], [67.3, 827.0], [67.4, 828.0], [67.5, 828.0], [67.6, 828.0], [67.7, 829.0], [67.8, 829.0], [67.9, 830.0], [68.0, 830.0], [68.1, 830.0], [68.2, 831.0], [68.3, 832.0], [68.4, 832.0], [68.5, 833.0], [68.6, 833.0], [68.7, 833.0], [68.8, 834.0], [68.9, 834.0], [69.0, 835.0], [69.1, 835.0], [69.2, 836.0], [69.3, 836.0], [69.4, 837.0], [69.5, 837.0], [69.6, 838.0], [69.7, 839.0], [69.8, 839.0], [69.9, 839.0], [70.0, 840.0], [70.1, 840.0], [70.2, 841.0], [70.3, 841.0], [70.4, 842.0], [70.5, 842.0], [70.6, 843.0], [70.7, 843.0], [70.8, 843.0], [70.9, 844.0], [71.0, 844.0], [71.1, 845.0], [71.2, 845.0], [71.3, 846.0], [71.4, 847.0], [71.5, 847.0], [71.6, 848.0], [71.7, 848.0], [71.8, 848.0], [71.9, 849.0], [72.0, 849.0], [72.1, 850.0], [72.2, 850.0], [72.3, 851.0], [72.4, 851.0], [72.5, 852.0], [72.6, 852.0], [72.7, 853.0], [72.8, 853.0], [72.9, 853.0], [73.0, 854.0], [73.1, 854.0], [73.2, 855.0], [73.3, 855.0], [73.4, 856.0], [73.5, 856.0], [73.6, 857.0], [73.7, 857.0], [73.8, 858.0], [73.9, 858.0], [74.0, 859.0], [74.1, 859.0], [74.2, 860.0], [74.3, 860.0], [74.4, 861.0], [74.5, 861.0], [74.6, 862.0], [74.7, 863.0], [74.8, 863.0], [74.9, 863.0], [75.0, 864.0], [75.1, 864.0], [75.2, 865.0], [75.3, 865.0], [75.4, 866.0], [75.5, 866.0], [75.6, 867.0], [75.7, 867.0], [75.8, 868.0], [75.9, 869.0], [76.0, 869.0], [76.1, 870.0], [76.2, 870.0], [76.3, 871.0], [76.4, 872.0], [76.5, 873.0], [76.6, 873.0], [76.7, 874.0], [76.8, 875.0], [76.9, 876.0], [77.0, 876.0], [77.1, 877.0], [77.2, 877.0], [77.3, 878.0], [77.4, 878.0], [77.5, 879.0], [77.6, 879.0], [77.7, 880.0], [77.8, 881.0], [77.9, 881.0], [78.0, 882.0], [78.1, 884.0], [78.2, 884.0], [78.3, 884.0], [78.4, 885.0], [78.5, 885.0], [78.6, 886.0], [78.7, 886.0], [78.8, 888.0], [78.9, 888.0], [79.0, 889.0], [79.1, 889.0], [79.2, 890.0], [79.3, 891.0], [79.4, 891.0], [79.5, 892.0], [79.6, 893.0], [79.7, 894.0], [79.8, 894.0], [79.9, 895.0], [80.0, 896.0], [80.1, 896.0], [80.2, 897.0], [80.3, 898.0], [80.4, 899.0], [80.5, 899.0], [80.6, 900.0], [80.7, 900.0], [80.8, 902.0], [80.9, 902.0], [81.0, 903.0], [81.1, 904.0], [81.2, 905.0], [81.3, 906.0], [81.4, 907.0], [81.5, 908.0], [81.6, 909.0], [81.7, 910.0], [81.8, 911.0], [81.9, 912.0], [82.0, 913.0], [82.1, 915.0], [82.2, 916.0], [82.3, 918.0], [82.4, 919.0], [82.5, 920.0], [82.6, 921.0], [82.7, 922.0], [82.8, 922.0], [82.9, 924.0], [83.0, 924.0], [83.1, 928.0], [83.2, 929.0], [83.3, 930.0], [83.4, 932.0], [83.5, 933.0], [83.6, 934.0], [83.7, 935.0], [83.8, 937.0], [83.9, 939.0], [84.0, 941.0], [84.1, 942.0], [84.2, 943.0], [84.3, 944.0], [84.4, 946.0], [84.5, 948.0], [84.6, 951.0], [84.7, 953.0], [84.8, 955.0], [84.9, 957.0], [85.0, 960.0], [85.1, 962.0], [85.2, 965.0], [85.3, 967.0], [85.4, 969.0], [85.5, 973.0], [85.6, 975.0], [85.7, 977.0], [85.8, 980.0], [85.9, 984.0], [86.0, 988.0], [86.1, 992.0], [86.2, 996.0], [86.3, 999.0], [86.4, 1004.0], [86.5, 1009.0], [86.6, 1014.0], [86.7, 1017.0], [86.8, 1026.0], [86.9, 1031.0], [87.0, 1035.0], [87.1, 1043.0], [87.2, 1050.0], [87.3, 1059.0], [87.4, 1067.0], [87.5, 1078.0], [87.6, 1092.0], [87.7, 1113.0], [87.8, 1124.0], [87.9, 1131.0], [88.0, 1136.0], [88.1, 1140.0], [88.2, 1145.0], [88.3, 1151.0], [88.4, 1155.0], [88.5, 1160.0], [88.6, 1164.0], [88.7, 1167.0], [88.8, 1169.0], [88.9, 1172.0], [89.0, 1174.0], [89.1, 1176.0], [89.2, 1180.0], [89.3, 1184.0], [89.4, 1185.0], [89.5, 1188.0], [89.6, 1190.0], [89.7, 1193.0], [89.8, 1195.0], [89.9, 1198.0], [90.0, 1201.0], [90.1, 1204.0], [90.2, 1207.0], [90.3, 1209.0], [90.4, 1211.0], [90.5, 1214.0], [90.6, 1217.0], [90.7, 1220.0], [90.8, 1222.0], [90.9, 1226.0], [91.0, 1228.0], [91.1, 1231.0], [91.2, 1234.0], [91.3, 1236.0], [91.4, 1238.0], [91.5, 1242.0], [91.6, 1245.0], [91.7, 1249.0], [91.8, 1252.0], [91.9, 1256.0], [92.0, 1258.0], [92.1, 1263.0], [92.2, 1267.0], [92.3, 1271.0], [92.4, 1274.0], [92.5, 1278.0], [92.6, 1282.0], [92.7, 1287.0], [92.8, 1295.0], [92.9, 1303.0], [93.0, 1314.0], [93.1, 1321.0], [93.2, 1326.0], [93.3, 1334.0], [93.4, 1342.0], [93.5, 1348.0], [93.6, 1353.0], [93.7, 1358.0], [93.8, 1363.0], [93.9, 1367.0], [94.0, 1373.0], [94.1, 1376.0], [94.2, 1383.0], [94.3, 1387.0], [94.4, 1390.0], [94.5, 1392.0], [94.6, 1397.0], [94.7, 1401.0], [94.8, 1408.0], [94.9, 1411.0], [95.0, 1416.0], [95.1, 1423.0], [95.2, 1429.0], [95.3, 1432.0], [95.4, 1443.0], [95.5, 1449.0], [95.6, 1462.0], [95.7, 1471.0], [95.8, 1486.0], [95.9, 1500.0], [96.0, 1515.0], [96.1, 1559.0], [96.2, 1636.0], [96.3, 1662.0], [96.4, 1677.0], [96.5, 1690.0], [96.6, 1696.0], [96.7, 1700.0], [96.8, 1706.0], [96.9, 1710.0], [97.0, 1714.0], [97.1, 1717.0], [97.2, 1721.0], [97.3, 1724.0], [97.4, 1729.0], [97.5, 1732.0], [97.6, 1737.0], [97.7, 1740.0], [97.8, 1744.0], [97.9, 1749.0], [98.0, 1754.0], [98.1, 1760.0], [98.2, 1769.0], [98.3, 1779.0], [98.4, 1789.0], [98.5, 1803.0], [98.6, 1814.0], [98.7, 1832.0], [98.8, 1844.0], [98.9, 1855.0], [99.0, 1872.0], [99.1, 1900.0], [99.2, 1919.0], [99.3, 1964.0], [99.4, 2046.0], [99.5, 2232.0], [99.6, 3771.0], [99.7, 3833.0], [99.8, 3864.0], [99.9, 4030.0], [100.0, 21805.0]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 4317.0, "series": [{"data": [[600.0, 1881.0], [10100.0, 2.0], [700.0, 4317.0], [800.0, 1857.0], [900.0, 576.0], [1000.0, 134.0], [1100.0, 232.0], [1200.0, 289.0], [1300.0, 179.0], [1400.0, 123.0], [21800.0, 1.0], [21600.0, 2.0], [1500.0, 27.0], [1600.0, 50.0], [1700.0, 184.0], [1800.0, 60.0], [1900.0, 29.0], [2000.0, 4.0], [2100.0, 3.0], [2200.0, 8.0], [2400.0, 2.0], [3700.0, 10.0], [3800.0, 18.0], [3900.0, 5.0], [4000.0, 3.0], [4100.0, 1.0], [4700.0, 3.0]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9579.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9579.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 410.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 11.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.54457928E12, "maxY": 99.88436744560802, "series": [{"data": [[1.5445794E12, 1.0], [1.54457934E12, 95.46491751142908], [1.54457928E12, 99.88436744560802]], "isOverall": false, "label": "Thread Group MutantFinder", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5445794E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 658.0, "minX": 1.0, "maxY": 9689.42857142857, "series": [{"data": [[2.0, 692.5], [3.0, 9689.42857142857], [4.0, 665.75], [5.0, 658.5], [6.0, 658.0], [7.0, 803.0], [8.0, 724.3333333333334], [9.0, 676.5], [10.0, 731.0], [11.0, 738.0], [12.0, 665.6], [13.0, 663.0], [14.0, 669.0], [15.0, 668.2], [17.0, 690.4615384615386], [18.0, 832.5], [19.0, 930.125], [20.0, 667.5], [21.0, 761.3333333333334], [22.0, 755.3333333333334], [23.0, 661.6666666666666], [24.0, 694.3333333333333], [25.0, 685.5], [26.0, 696.0], [27.0, 806.0], [28.0, 849.5], [29.0, 1000.0], [30.0, 872.0], [31.0, 855.0], [33.0, 824.0], [32.0, 844.0], [35.0, 1375.1666666666667], [34.0, 1382.0], [37.0, 1403.6], [36.0, 1421.6], [39.0, 752.9375000000001], [38.0, 1257.0666666666666], [40.0, 665.2], [43.0, 674.5], [42.0, 693.2], [45.0, 734.5], [44.0, 760.0], [47.0, 684.75], [46.0, 708.3333333333334], [49.0, 712.5], [48.0, 695.3333333333333], [51.0, 862.6666666666666], [50.0, 675.5], [52.0, 956.25], [55.0, 689.7142857142857], [54.0, 1301.6], [57.0, 674.0], [56.0, 674.0], [59.0, 696.0], [58.0, 694.6666666666667], [61.0, 664.75], [60.0, 744.7777777777778], [63.0, 682.0], [62.0, 678.6666666666666], [67.0, 732.0833333333334], [66.0, 678.5714285714286], [65.0, 942.6666666666666], [64.0, 807.5], [69.0, 970.6], [70.0, 859.3928571428572], [71.0, 809.9411764705882], [68.0, 1014.2857142857143], [72.0, 748.2], [73.0, 744.6], [75.0, 798.0], [74.0, 813.0], [76.0, 759.8571428571429], [77.0, 692.25], [78.0, 692.875], [79.0, 687.6], [82.0, 724.0000000000001], [83.0, 742.4705882352941], [81.0, 690.2857142857143], [80.0, 707.9411764705883], [85.0, 701.5], [86.0, 712.8], [87.0, 741.8571428571429], [84.0, 711.8000000000001], [91.0, 794.5384615384617], [90.0, 695.1666666666666], [89.0, 713.8181818181819], [88.0, 757.8571428571428], [92.0, 769.5], [93.0, 951.9], [94.0, 1316.6538461538464], [95.0, 949.9130434782606], [96.0, 936.9878048780488], [97.0, 868.7058823529413], [98.0, 1250.5714285714287], [99.0, 756.9195979899495], [100.0, 863.471157015714], [1.0, 719.2]], "isOverall": false, "label": "POST Mutants", "isController": false}, {"data": [[97.61149999999998, 866.2096000000008]], "isOverall": false, "label": "POST Mutants-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10.75, "minX": 1.54457928E12, "maxY": 24316.5, "series": [{"data": [[1.5445794E12, 10.75], [1.54457934E12, 10816.65], [1.54457928E12, 10672.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5445794E12, 24.166666666666668], [1.54457934E12, 24316.5], [1.54457928E12, 23992.666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5445794E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 719.2, "minX": 1.54457928E12, "maxY": 882.4953289604459, "series": [{"data": [[1.5445794E12, 719.2], [1.54457934E12, 882.4953289604459], [1.54457928E12, 849.852135374699]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5445794E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 719.2, "minX": 1.54457928E12, "maxY": 882.4953289604459, "series": [{"data": [[1.5445794E12, 719.2], [1.54457934E12, 882.4953289604459], [1.54457928E12, 849.8509266720375]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5445794E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 536.0, "minX": 1.54457928E12, "maxY": 662.1443053070967, "series": [{"data": [[1.5445794E12, 536.0], [1.54457934E12, 662.1443053070967], [1.54457928E12, 622.6692183722816]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5445794E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 650.0, "minX": 1.54457928E12, "maxY": 21805.0, "series": [{"data": [[1.5445794E12, 804.0], [1.54457934E12, 21805.0], [1.54457928E12, 4717.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5445794E12, 659.0], [1.54457934E12, 650.0], [1.54457928E12, 652.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5445794E12, 1200.0], [1.54457934E12, 1200.5], [1.54457928E12, 1169.1999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5445794E12, 1873.1000000000004], [1.54457934E12, 1873.1499999999996], [1.54457928E12, 1874.8400000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5445794E12, 1417.0], [1.54457934E12, 1417.5], [1.54457928E12, 1371.0999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5445794E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 750.0, "minX": 1000.0, "maxY": 1328.5, "series": [{"data": [[5000.0, 818.0], [3000.0, 769.0], [6000.0, 794.5], [1000.0, 750.0], [2000.0, 756.0], [4000.0, 778.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 894.0], [2000.0, 1328.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 6000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 750.0, "minX": 1000.0, "maxY": 1328.5, "series": [{"data": [[5000.0, 818.0], [3000.0, 769.0], [6000.0, 794.5], [1000.0, 750.0], [2000.0, 756.0], [4000.0, 778.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 894.0], [2000.0, 1328.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 6000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457928E12, "maxY": 84.4, "series": [{"data": [[1.5445794E12, 0.06666666666666667], [1.54457934E12, 82.2], [1.54457928E12, 84.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5445794E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457928E12, "maxY": 83.78333333333333, "series": [{"data": [[1.5445794E12, 0.08333333333333333], [1.54457934E12, 83.78333333333333], [1.54457928E12, 82.61666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.54457934E12, 0.06666666666666667], [1.54457928E12, 0.11666666666666667]], "isOverall": false, "label": "403", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5445794E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457928E12, "maxY": 83.78333333333333, "series": [{"data": [[1.5445794E12, 0.08333333333333333], [1.54457934E12, 83.78333333333333], [1.54457928E12, 82.61666666666666]], "isOverall": false, "label": "POST Mutants-success", "isController": false}, {"data": [[1.54457934E12, 0.06666666666666667], [1.54457928E12, 0.11666666666666667]], "isOverall": false, "label": "POST Mutants-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5445794E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457928E12, "maxY": 83.78333333333333, "series": [{"data": [[1.5445794E12, 0.08333333333333333], [1.54457934E12, 83.78333333333333], [1.54457928E12, 82.61666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.54457934E12, 0.06666666666666667], [1.54457928E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5445794E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

