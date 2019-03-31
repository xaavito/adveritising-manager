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
        data: {"result": {"minY": 647.0, "minX": 0.0, "maxY": 139406.0, "series": [{"data": [[0.0, 647.0], [0.1, 654.0], [0.2, 655.0], [0.3, 656.0], [0.4, 657.0], [0.5, 658.0], [0.6, 659.0], [0.7, 659.0], [0.8, 660.0], [0.9, 661.0], [1.0, 661.0], [1.1, 662.0], [1.2, 662.0], [1.3, 662.0], [1.4, 663.0], [1.5, 663.0], [1.6, 664.0], [1.7, 664.0], [1.8, 664.0], [1.9, 665.0], [2.0, 665.0], [2.1, 665.0], [2.2, 666.0], [2.3, 666.0], [2.4, 666.0], [2.5, 666.0], [2.6, 667.0], [2.7, 667.0], [2.8, 667.0], [2.9, 668.0], [3.0, 668.0], [3.1, 668.0], [3.2, 668.0], [3.3, 669.0], [3.4, 669.0], [3.5, 669.0], [3.6, 669.0], [3.7, 670.0], [3.8, 670.0], [3.9, 670.0], [4.0, 670.0], [4.1, 671.0], [4.2, 671.0], [4.3, 671.0], [4.4, 671.0], [4.5, 672.0], [4.6, 672.0], [4.7, 672.0], [4.8, 672.0], [4.9, 672.0], [5.0, 673.0], [5.1, 673.0], [5.2, 673.0], [5.3, 673.0], [5.4, 674.0], [5.5, 674.0], [5.6, 674.0], [5.7, 674.0], [5.8, 674.0], [5.9, 675.0], [6.0, 675.0], [6.1, 675.0], [6.2, 675.0], [6.3, 675.0], [6.4, 676.0], [6.5, 676.0], [6.6, 676.0], [6.7, 676.0], [6.8, 676.0], [6.9, 677.0], [7.0, 677.0], [7.1, 677.0], [7.2, 677.0], [7.3, 677.0], [7.4, 678.0], [7.5, 678.0], [7.6, 678.0], [7.7, 678.0], [7.8, 678.0], [7.9, 678.0], [8.0, 679.0], [8.1, 679.0], [8.2, 679.0], [8.3, 679.0], [8.4, 679.0], [8.5, 680.0], [8.6, 680.0], [8.7, 680.0], [8.8, 680.0], [8.9, 680.0], [9.0, 681.0], [9.1, 681.0], [9.2, 681.0], [9.3, 681.0], [9.4, 681.0], [9.5, 681.0], [9.6, 682.0], [9.7, 682.0], [9.8, 682.0], [9.9, 682.0], [10.0, 682.0], [10.1, 682.0], [10.2, 683.0], [10.3, 683.0], [10.4, 683.0], [10.5, 683.0], [10.6, 683.0], [10.7, 684.0], [10.8, 684.0], [10.9, 684.0], [11.0, 684.0], [11.1, 684.0], [11.2, 684.0], [11.3, 684.0], [11.4, 685.0], [11.5, 685.0], [11.6, 685.0], [11.7, 685.0], [11.8, 685.0], [11.9, 685.0], [12.0, 686.0], [12.1, 686.0], [12.2, 686.0], [12.3, 686.0], [12.4, 686.0], [12.5, 686.0], [12.6, 687.0], [12.7, 687.0], [12.8, 687.0], [12.9, 687.0], [13.0, 687.0], [13.1, 687.0], [13.2, 687.0], [13.3, 688.0], [13.4, 688.0], [13.5, 688.0], [13.6, 688.0], [13.7, 688.0], [13.8, 688.0], [13.9, 689.0], [14.0, 689.0], [14.1, 689.0], [14.2, 689.0], [14.3, 689.0], [14.4, 689.0], [14.5, 690.0], [14.6, 690.0], [14.7, 690.0], [14.8, 690.0], [14.9, 690.0], [15.0, 690.0], [15.1, 690.0], [15.2, 691.0], [15.3, 691.0], [15.4, 691.0], [15.5, 691.0], [15.6, 691.0], [15.7, 691.0], [15.8, 692.0], [15.9, 692.0], [16.0, 692.0], [16.1, 692.0], [16.2, 692.0], [16.3, 692.0], [16.4, 692.0], [16.5, 693.0], [16.6, 693.0], [16.7, 693.0], [16.8, 693.0], [16.9, 693.0], [17.0, 693.0], [17.1, 694.0], [17.2, 694.0], [17.3, 694.0], [17.4, 694.0], [17.5, 694.0], [17.6, 694.0], [17.7, 694.0], [17.8, 695.0], [17.9, 695.0], [18.0, 695.0], [18.1, 695.0], [18.2, 695.0], [18.3, 695.0], [18.4, 695.0], [18.5, 696.0], [18.6, 696.0], [18.7, 696.0], [18.8, 696.0], [18.9, 696.0], [19.0, 696.0], [19.1, 696.0], [19.2, 697.0], [19.3, 697.0], [19.4, 697.0], [19.5, 697.0], [19.6, 697.0], [19.7, 697.0], [19.8, 698.0], [19.9, 698.0], [20.0, 698.0], [20.1, 698.0], [20.2, 698.0], [20.3, 698.0], [20.4, 698.0], [20.5, 699.0], [20.6, 699.0], [20.7, 699.0], [20.8, 699.0], [20.9, 699.0], [21.0, 699.0], [21.1, 699.0], [21.2, 700.0], [21.3, 700.0], [21.4, 700.0], [21.5, 700.0], [21.6, 700.0], [21.7, 700.0], [21.8, 700.0], [21.9, 701.0], [22.0, 701.0], [22.1, 701.0], [22.2, 701.0], [22.3, 701.0], [22.4, 701.0], [22.5, 701.0], [22.6, 702.0], [22.7, 702.0], [22.8, 702.0], [22.9, 702.0], [23.0, 702.0], [23.1, 702.0], [23.2, 702.0], [23.3, 703.0], [23.4, 703.0], [23.5, 703.0], [23.6, 703.0], [23.7, 703.0], [23.8, 703.0], [23.9, 704.0], [24.0, 704.0], [24.1, 704.0], [24.2, 704.0], [24.3, 704.0], [24.4, 704.0], [24.5, 704.0], [24.6, 705.0], [24.7, 705.0], [24.8, 705.0], [24.9, 705.0], [25.0, 705.0], [25.1, 705.0], [25.2, 705.0], [25.3, 706.0], [25.4, 706.0], [25.5, 706.0], [25.6, 706.0], [25.7, 706.0], [25.8, 706.0], [25.9, 707.0], [26.0, 707.0], [26.1, 707.0], [26.2, 707.0], [26.3, 707.0], [26.4, 707.0], [26.5, 708.0], [26.6, 708.0], [26.7, 708.0], [26.8, 708.0], [26.9, 708.0], [27.0, 708.0], [27.1, 708.0], [27.2, 709.0], [27.3, 709.0], [27.4, 709.0], [27.5, 709.0], [27.6, 709.0], [27.7, 709.0], [27.8, 710.0], [27.9, 710.0], [28.0, 710.0], [28.1, 710.0], [28.2, 710.0], [28.3, 710.0], [28.4, 711.0], [28.5, 711.0], [28.6, 711.0], [28.7, 711.0], [28.8, 711.0], [28.9, 711.0], [29.0, 712.0], [29.1, 712.0], [29.2, 712.0], [29.3, 712.0], [29.4, 712.0], [29.5, 712.0], [29.6, 712.0], [29.7, 713.0], [29.8, 713.0], [29.9, 713.0], [30.0, 713.0], [30.1, 713.0], [30.2, 713.0], [30.3, 714.0], [30.4, 714.0], [30.5, 714.0], [30.6, 714.0], [30.7, 714.0], [30.8, 714.0], [30.9, 715.0], [31.0, 715.0], [31.1, 715.0], [31.2, 715.0], [31.3, 715.0], [31.4, 715.0], [31.5, 716.0], [31.6, 716.0], [31.7, 716.0], [31.8, 716.0], [31.9, 716.0], [32.0, 716.0], [32.1, 717.0], [32.2, 717.0], [32.3, 717.0], [32.4, 717.0], [32.5, 717.0], [32.6, 717.0], [32.7, 718.0], [32.8, 718.0], [32.9, 718.0], [33.0, 718.0], [33.1, 718.0], [33.2, 718.0], [33.3, 719.0], [33.4, 719.0], [33.5, 719.0], [33.6, 719.0], [33.7, 719.0], [33.8, 720.0], [33.9, 720.0], [34.0, 720.0], [34.1, 720.0], [34.2, 720.0], [34.3, 720.0], [34.4, 721.0], [34.5, 721.0], [34.6, 721.0], [34.7, 721.0], [34.8, 721.0], [34.9, 722.0], [35.0, 722.0], [35.1, 722.0], [35.2, 722.0], [35.3, 722.0], [35.4, 722.0], [35.5, 723.0], [35.6, 723.0], [35.7, 723.0], [35.8, 723.0], [35.9, 723.0], [36.0, 724.0], [36.1, 724.0], [36.2, 724.0], [36.3, 724.0], [36.4, 724.0], [36.5, 725.0], [36.6, 725.0], [36.7, 725.0], [36.8, 725.0], [36.9, 725.0], [37.0, 726.0], [37.1, 726.0], [37.2, 726.0], [37.3, 726.0], [37.4, 726.0], [37.5, 727.0], [37.6, 727.0], [37.7, 727.0], [37.8, 727.0], [37.9, 727.0], [38.0, 728.0], [38.1, 728.0], [38.2, 728.0], [38.3, 728.0], [38.4, 728.0], [38.5, 729.0], [38.6, 729.0], [38.7, 729.0], [38.8, 729.0], [38.9, 729.0], [39.0, 730.0], [39.1, 730.0], [39.2, 730.0], [39.3, 730.0], [39.4, 730.0], [39.5, 731.0], [39.6, 731.0], [39.7, 731.0], [39.8, 731.0], [39.9, 732.0], [40.0, 732.0], [40.1, 732.0], [40.2, 732.0], [40.3, 732.0], [40.4, 733.0], [40.5, 733.0], [40.6, 733.0], [40.7, 733.0], [40.8, 734.0], [40.9, 734.0], [41.0, 734.0], [41.1, 734.0], [41.2, 735.0], [41.3, 735.0], [41.4, 735.0], [41.5, 735.0], [41.6, 736.0], [41.7, 736.0], [41.8, 736.0], [41.9, 736.0], [42.0, 736.0], [42.1, 737.0], [42.2, 737.0], [42.3, 737.0], [42.4, 737.0], [42.5, 738.0], [42.6, 738.0], [42.7, 738.0], [42.8, 738.0], [42.9, 739.0], [43.0, 739.0], [43.1, 739.0], [43.2, 739.0], [43.3, 740.0], [43.4, 740.0], [43.5, 740.0], [43.6, 740.0], [43.7, 741.0], [43.8, 741.0], [43.9, 741.0], [44.0, 741.0], [44.1, 741.0], [44.2, 742.0], [44.3, 742.0], [44.4, 742.0], [44.5, 742.0], [44.6, 743.0], [44.7, 743.0], [44.8, 743.0], [44.9, 743.0], [45.0, 744.0], [45.1, 744.0], [45.2, 744.0], [45.3, 744.0], [45.4, 745.0], [45.5, 745.0], [45.6, 745.0], [45.7, 745.0], [45.8, 745.0], [45.9, 746.0], [46.0, 746.0], [46.1, 746.0], [46.2, 746.0], [46.3, 747.0], [46.4, 747.0], [46.5, 747.0], [46.6, 747.0], [46.7, 748.0], [46.8, 748.0], [46.9, 748.0], [47.0, 748.0], [47.1, 749.0], [47.2, 749.0], [47.3, 749.0], [47.4, 749.0], [47.5, 750.0], [47.6, 750.0], [47.7, 750.0], [47.8, 750.0], [47.9, 751.0], [48.0, 751.0], [48.1, 751.0], [48.2, 751.0], [48.3, 752.0], [48.4, 752.0], [48.5, 752.0], [48.6, 752.0], [48.7, 753.0], [48.8, 753.0], [48.9, 753.0], [49.0, 754.0], [49.1, 754.0], [49.2, 754.0], [49.3, 754.0], [49.4, 755.0], [49.5, 755.0], [49.6, 755.0], [49.7, 755.0], [49.8, 756.0], [49.9, 756.0], [50.0, 756.0], [50.1, 757.0], [50.2, 757.0], [50.3, 757.0], [50.4, 758.0], [50.5, 758.0], [50.6, 758.0], [50.7, 758.0], [50.8, 759.0], [50.9, 759.0], [51.0, 759.0], [51.1, 759.0], [51.2, 760.0], [51.3, 760.0], [51.4, 760.0], [51.5, 761.0], [51.6, 761.0], [51.7, 761.0], [51.8, 762.0], [51.9, 762.0], [52.0, 762.0], [52.1, 762.0], [52.2, 763.0], [52.3, 763.0], [52.4, 763.0], [52.5, 764.0], [52.6, 764.0], [52.7, 764.0], [52.8, 765.0], [52.9, 765.0], [53.0, 765.0], [53.1, 766.0], [53.2, 766.0], [53.3, 766.0], [53.4, 767.0], [53.5, 767.0], [53.6, 767.0], [53.7, 768.0], [53.8, 768.0], [53.9, 768.0], [54.0, 769.0], [54.1, 769.0], [54.2, 769.0], [54.3, 770.0], [54.4, 770.0], [54.5, 770.0], [54.6, 771.0], [54.7, 771.0], [54.8, 772.0], [54.9, 772.0], [55.0, 772.0], [55.1, 773.0], [55.2, 773.0], [55.3, 773.0], [55.4, 774.0], [55.5, 774.0], [55.6, 774.0], [55.7, 775.0], [55.8, 775.0], [55.9, 775.0], [56.0, 776.0], [56.1, 776.0], [56.2, 777.0], [56.3, 777.0], [56.4, 777.0], [56.5, 778.0], [56.6, 778.0], [56.7, 779.0], [56.8, 779.0], [56.9, 779.0], [57.0, 780.0], [57.1, 780.0], [57.2, 781.0], [57.3, 781.0], [57.4, 782.0], [57.5, 782.0], [57.6, 782.0], [57.7, 783.0], [57.8, 783.0], [57.9, 784.0], [58.0, 784.0], [58.1, 785.0], [58.2, 785.0], [58.3, 785.0], [58.4, 786.0], [58.5, 786.0], [58.6, 787.0], [58.7, 787.0], [58.8, 788.0], [58.9, 788.0], [59.0, 789.0], [59.1, 789.0], [59.2, 790.0], [59.3, 790.0], [59.4, 791.0], [59.5, 791.0], [59.6, 792.0], [59.7, 792.0], [59.8, 792.0], [59.9, 793.0], [60.0, 793.0], [60.1, 794.0], [60.2, 794.0], [60.3, 795.0], [60.4, 796.0], [60.5, 796.0], [60.6, 797.0], [60.7, 797.0], [60.8, 798.0], [60.9, 798.0], [61.0, 799.0], [61.1, 799.0], [61.2, 800.0], [61.3, 800.0], [61.4, 801.0], [61.5, 801.0], [61.6, 802.0], [61.7, 802.0], [61.8, 803.0], [61.9, 804.0], [62.0, 804.0], [62.1, 805.0], [62.2, 805.0], [62.3, 806.0], [62.4, 806.0], [62.5, 807.0], [62.6, 807.0], [62.7, 808.0], [62.8, 808.0], [62.9, 809.0], [63.0, 809.0], [63.1, 810.0], [63.2, 810.0], [63.3, 811.0], [63.4, 811.0], [63.5, 812.0], [63.6, 812.0], [63.7, 813.0], [63.8, 813.0], [63.9, 814.0], [64.0, 814.0], [64.1, 815.0], [64.2, 815.0], [64.3, 816.0], [64.4, 816.0], [64.5, 817.0], [64.6, 817.0], [64.7, 818.0], [64.8, 818.0], [64.9, 819.0], [65.0, 819.0], [65.1, 820.0], [65.2, 820.0], [65.3, 821.0], [65.4, 822.0], [65.5, 822.0], [65.6, 822.0], [65.7, 823.0], [65.8, 823.0], [65.9, 824.0], [66.0, 824.0], [66.1, 825.0], [66.2, 825.0], [66.3, 826.0], [66.4, 826.0], [66.5, 827.0], [66.6, 827.0], [66.7, 828.0], [66.8, 828.0], [66.9, 829.0], [67.0, 829.0], [67.1, 830.0], [67.2, 830.0], [67.3, 831.0], [67.4, 831.0], [67.5, 832.0], [67.6, 832.0], [67.7, 833.0], [67.8, 833.0], [67.9, 834.0], [68.0, 834.0], [68.1, 835.0], [68.2, 835.0], [68.3, 836.0], [68.4, 836.0], [68.5, 837.0], [68.6, 837.0], [68.7, 838.0], [68.8, 838.0], [68.9, 839.0], [69.0, 839.0], [69.1, 840.0], [69.2, 840.0], [69.3, 841.0], [69.4, 841.0], [69.5, 842.0], [69.6, 842.0], [69.7, 843.0], [69.8, 843.0], [69.9, 844.0], [70.0, 844.0], [70.1, 845.0], [70.2, 845.0], [70.3, 846.0], [70.4, 846.0], [70.5, 847.0], [70.6, 847.0], [70.7, 848.0], [70.8, 848.0], [70.9, 849.0], [71.0, 849.0], [71.1, 850.0], [71.2, 850.0], [71.3, 851.0], [71.4, 851.0], [71.5, 852.0], [71.6, 852.0], [71.7, 853.0], [71.8, 853.0], [71.9, 854.0], [72.0, 854.0], [72.1, 855.0], [72.2, 855.0], [72.3, 856.0], [72.4, 856.0], [72.5, 857.0], [72.6, 857.0], [72.7, 858.0], [72.8, 858.0], [72.9, 859.0], [73.0, 859.0], [73.1, 860.0], [73.2, 860.0], [73.3, 861.0], [73.4, 861.0], [73.5, 862.0], [73.6, 863.0], [73.7, 863.0], [73.8, 864.0], [73.9, 864.0], [74.0, 865.0], [74.1, 865.0], [74.2, 866.0], [74.3, 866.0], [74.4, 867.0], [74.5, 868.0], [74.6, 868.0], [74.7, 869.0], [74.8, 869.0], [74.9, 870.0], [75.0, 870.0], [75.1, 871.0], [75.2, 871.0], [75.3, 872.0], [75.4, 873.0], [75.5, 873.0], [75.6, 874.0], [75.7, 874.0], [75.8, 875.0], [75.9, 875.0], [76.0, 876.0], [76.1, 877.0], [76.2, 877.0], [76.3, 878.0], [76.4, 879.0], [76.5, 879.0], [76.6, 880.0], [76.7, 881.0], [76.8, 881.0], [76.9, 882.0], [77.0, 882.0], [77.1, 883.0], [77.2, 884.0], [77.3, 885.0], [77.4, 885.0], [77.5, 886.0], [77.6, 886.0], [77.7, 887.0], [77.8, 888.0], [77.9, 888.0], [78.0, 889.0], [78.1, 890.0], [78.2, 890.0], [78.3, 891.0], [78.4, 892.0], [78.5, 892.0], [78.6, 893.0], [78.7, 894.0], [78.8, 895.0], [78.9, 895.0], [79.0, 896.0], [79.1, 897.0], [79.2, 898.0], [79.3, 898.0], [79.4, 899.0], [79.5, 900.0], [79.6, 900.0], [79.7, 901.0], [79.8, 902.0], [79.9, 903.0], [80.0, 904.0], [80.1, 904.0], [80.2, 905.0], [80.3, 906.0], [80.4, 907.0], [80.5, 908.0], [80.6, 909.0], [80.7, 909.0], [80.8, 910.0], [80.9, 911.0], [81.0, 912.0], [81.1, 913.0], [81.2, 913.0], [81.3, 914.0], [81.4, 915.0], [81.5, 916.0], [81.6, 917.0], [81.7, 918.0], [81.8, 919.0], [81.9, 921.0], [82.0, 922.0], [82.1, 923.0], [82.2, 924.0], [82.3, 925.0], [82.4, 926.0], [82.5, 927.0], [82.6, 929.0], [82.7, 930.0], [82.8, 931.0], [82.9, 933.0], [83.0, 934.0], [83.1, 936.0], [83.2, 937.0], [83.3, 939.0], [83.4, 941.0], [83.5, 942.0], [83.6, 944.0], [83.7, 946.0], [83.8, 948.0], [83.9, 950.0], [84.0, 951.0], [84.1, 954.0], [84.2, 956.0], [84.3, 959.0], [84.4, 961.0], [84.5, 963.0], [84.6, 965.0], [84.7, 968.0], [84.8, 971.0], [84.9, 974.0], [85.0, 977.0], [85.1, 979.0], [85.2, 982.0], [85.3, 985.0], [85.4, 989.0], [85.5, 993.0], [85.6, 997.0], [85.7, 1001.0], [85.8, 1004.0], [85.9, 1007.0], [86.0, 1012.0], [86.1, 1016.0], [86.2, 1021.0], [86.3, 1025.0], [86.4, 1030.0], [86.5, 1036.0], [86.6, 1042.0], [86.7, 1048.0], [86.8, 1055.0], [86.9, 1061.0], [87.0, 1069.0], [87.1, 1077.0], [87.2, 1087.0], [87.3, 1101.0], [87.4, 1119.0], [87.5, 1131.0], [87.6, 1139.0], [87.7, 1145.0], [87.8, 1149.0], [87.9, 1153.0], [88.0, 1157.0], [88.1, 1160.0], [88.2, 1163.0], [88.3, 1166.0], [88.4, 1169.0], [88.5, 1171.0], [88.6, 1174.0], [88.7, 1177.0], [88.8, 1180.0], [88.9, 1184.0], [89.0, 1186.0], [89.1, 1188.0], [89.2, 1191.0], [89.3, 1193.0], [89.4, 1196.0], [89.5, 1198.0], [89.6, 1201.0], [89.7, 1204.0], [89.8, 1207.0], [89.9, 1210.0], [90.0, 1213.0], [90.1, 1216.0], [90.2, 1219.0], [90.3, 1222.0], [90.4, 1225.0], [90.5, 1227.0], [90.6, 1230.0], [90.7, 1234.0], [90.8, 1237.0], [90.9, 1240.0], [91.0, 1244.0], [91.1, 1248.0], [91.2, 1253.0], [91.3, 1257.0], [91.4, 1261.0], [91.5, 1265.0], [91.6, 1269.0], [91.7, 1273.0], [91.8, 1277.0], [91.9, 1284.0], [92.0, 1290.0], [92.1, 1296.0], [92.2, 1303.0], [92.3, 1309.0], [92.4, 1316.0], [92.5, 1323.0], [92.6, 1330.0], [92.7, 1336.0], [92.8, 1344.0], [92.9, 1350.0], [93.0, 1356.0], [93.1, 1362.0], [93.2, 1368.0], [93.3, 1374.0], [93.4, 1380.0], [93.5, 1386.0], [93.6, 1392.0], [93.7, 1397.0], [93.8, 1404.0], [93.9, 1411.0], [94.0, 1418.0], [94.1, 1425.0], [94.2, 1433.0], [94.3, 1442.0], [94.4, 1451.0], [94.5, 1461.0], [94.6, 1470.0], [94.7, 1481.0], [94.8, 1492.0], [94.9, 1509.0], [95.0, 1527.0], [95.1, 1544.0], [95.2, 1569.0], [95.3, 1604.0], [95.4, 1641.0], [95.5, 1666.0], [95.6, 1677.0], [95.7, 1683.0], [95.8, 1688.0], [95.9, 1692.0], [96.0, 1696.0], [96.1, 1699.0], [96.2, 1702.0], [96.3, 1705.0], [96.4, 1708.0], [96.5, 1712.0], [96.6, 1714.0], [96.7, 1717.0], [96.8, 1720.0], [96.9, 1722.0], [97.0, 1726.0], [97.1, 1728.0], [97.2, 1732.0], [97.3, 1736.0], [97.4, 1741.0], [97.5, 1744.0], [97.6, 1749.0], [97.7, 1753.0], [97.8, 1759.0], [97.9, 1766.0], [98.0, 1773.0], [98.1, 1778.0], [98.2, 1787.0], [98.3, 1795.0], [98.4, 1805.0], [98.5, 1817.0], [98.6, 1830.0], [98.7, 1843.0], [98.8, 1854.0], [98.9, 1869.0], [99.0, 1887.0], [99.1, 1915.0], [99.2, 1956.0], [99.3, 2115.0], [99.4, 2791.0], [99.5, 3690.0], [99.6, 3779.0], [99.7, 3859.0], [99.8, 4084.0], [99.9, 4736.0], [100.0, 139406.0]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 39923.0, "series": [{"data": [[600.0, 21180.0], [700.0, 39923.0], [800.0, 18385.0], [900.0, 6181.0], [1000.0, 1618.0], [1100.0, 2248.0], [1200.0, 2622.0], [1300.0, 1580.0], [1400.0, 1109.0], [1500.0, 442.0], [1600.0, 828.0], [1700.0, 2234.0], [1800.0, 704.0], [1900.0, 188.0], [2000.0, 50.0], [2100.0, 25.0], [2200.0, 27.0], [2300.0, 10.0], [2400.0, 8.0], [2500.0, 11.0], [2600.0, 17.0], [2700.0, 10.0], [2800.0, 8.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 4.0], [3300.0, 2.0], [3200.0, 5.0], [3400.0, 2.0], [3700.0, 108.0], [3600.0, 90.0], [3800.0, 112.0], [3900.0, 37.0], [4000.0, 32.0], [4200.0, 10.0], [4100.0, 25.0], [4300.0, 9.0], [4600.0, 11.0], [4400.0, 3.0], [4700.0, 60.0], [4800.0, 13.0], [4900.0, 3.0], [5000.0, 2.0], [5100.0, 3.0], [5500.0, 1.0], [5600.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [8600.0, 1.0], [139400.0, 1.0], [10000.0, 5.0], [9900.0, 4.0], [9800.0, 2.0], [10200.0, 2.0], [10600.0, 1.0], [10700.0, 1.0], [21600.0, 3.0], [21700.0, 10.0], [21800.0, 10.0], [21900.0, 4.0], [22000.0, 2.0], [22300.0, 1.0], [24900.0, 1.0], [24800.0, 1.0], [35600.0, 1.0]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 139400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 141.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 94714.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94714.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5145.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 141.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.54457946E12, "maxY": 100.0, "series": [{"data": [[1.54458036E12, 18.812080536912756], [1.54458006E12, 100.0], [1.54458E12, 100.0], [1.5445797E12, 100.0], [1.54458012E12, 100.0], [1.54457982E12, 100.0], [1.54457976E12, 100.0], [1.54457946E12, 99.88109756097556], [1.54458042E12, 1.0], [1.54457988E12, 100.0], [1.54457958E12, 100.0], [1.54458048E12, 1.0], [1.54458018E12, 100.0], [1.54457952E12, 100.0], [1.5445803E12, 90.10909090909115], [1.54457964E12, 100.0], [1.54458024E12, 100.0], [1.54457994E12, 100.0]], "isOverall": false, "label": "Thread Group MutantFinder", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54458048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 658.0, "minX": 1.0, "maxY": 2666.719424460431, "series": [{"data": [[2.0, 714.6666666666666], [3.0, 1478.75], [4.0, 2503.8333333333335], [5.0, 853.4285714285714], [6.0, 1412.0], [7.0, 1062.6666666666667], [8.0, 717.0], [9.0, 1084.9512195121947], [10.0, 878.75], [11.0, 1265.6739130434778], [12.0, 690.2631578947369], [13.0, 661.8888888888889], [14.0, 676.2222222222221], [15.0, 679.9634146341464], [16.0, 659.0], [17.0, 695.7647058823529], [18.0, 720.8235294117648], [19.0, 675.375], [20.0, 663.9090909090909], [21.0, 660.4166666666667], [22.0, 694.1578947368422], [23.0, 666.0], [24.0, 815.0], [25.0, 695.25], [26.0, 693.2941176470588], [27.0, 722.4666666666666], [28.0, 674.6153846153846], [29.0, 664.0], [30.0, 682.3571428571429], [31.0, 703.0714285714286], [33.0, 740.0], [32.0, 688.9166666666667], [35.0, 693.0], [34.0, 681.421052631579], [37.0, 675.6428571428571], [36.0, 658.0], [39.0, 695.9000000000001], [38.0, 717.8000000000001], [41.0, 667.6111111111112], [40.0, 666.0], [43.0, 730.9574468085107], [42.0, 736.95], [45.0, 736.7058823529412], [44.0, 712.9107142857141], [47.0, 697.0], [46.0, 709.1944444444445], [49.0, 692.0], [48.0, 677.3636363636364], [51.0, 699.258620689655], [50.0, 658.0], [53.0, 675.7916666666667], [52.0, 669.1666666666667], [55.0, 715.0961538461537], [54.0, 700.5588235294114], [57.0, 713.1034482758621], [56.0, 678.2222222222222], [59.0, 690.3124999999999], [58.0, 697.3333333333333], [61.0, 666.2500000000001], [60.0, 750.6666666666666], [63.0, 784.0], [62.0, 704.2372881355931], [65.0, 707.5185185185186], [67.0, 722.7647058823529], [66.0, 826.0], [64.0, 711.3235294117648], [68.0, 741.2238805970148], [69.0, 736.4761904761906], [71.0, 700.3026315789471], [70.0, 703.8846153846154], [73.0, 1063.1554054054054], [74.0, 1424.9767441860465], [75.0, 695.3777777777777], [72.0, 714.6363636363637], [79.0, 776.1666666666669], [78.0, 712.7462686567167], [77.0, 726.2222222222222], [80.0, 740.6750000000001], [81.0, 1192.9103448275869], [82.0, 700.0933333333332], [83.0, 726.8064516129032], [84.0, 749.0983606557377], [85.0, 955.217391304348], [87.0, 1099.25], [86.0, 1396.25], [88.0, 1065.2173913043478], [89.0, 808.9154929577466], [90.0, 815.2886597938146], [91.0, 954.1788079470198], [92.0, 700.681818181818], [94.0, 1136.8750000000002], [95.0, 928.9702970297034], [93.0, 884.4923076923076], [97.0, 927.1818181818186], [99.0, 822.4951219512193], [98.0, 1020.3317972350228], [96.0, 2666.719424460431], [100.0, 876.6720256900645], [1.0, 754.710743801653]], "isOverall": false, "label": "POST Mutants", "isController": false}, {"data": [[98.82772000000023, 877.8959000000029]], "isOverall": false, "label": "POST Mutants-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 17.2, "minX": 1.54457946E12, "maxY": 34249.0, "series": [{"data": [[1.54458036E12, 1281.4], [1.54458006E12, 15000.55], [1.54458E12, 13856.75], [1.5445797E12, 13839.55], [1.54458012E12, 15054.3], [1.54457982E12, 15234.9], [1.54457976E12, 14366.3], [1.54457946E12, 10578.0], [1.54458042E12, 165.55], [1.54457988E12, 14650.1], [1.54457958E12, 14626.45], [1.54458048E12, 17.2], [1.54458018E12, 14076.05], [1.54457952E12, 14783.4], [1.5445803E12, 13053.133333333333], [1.54457964E12, 15082.25], [1.54458024E12, 14991.95], [1.54457994E12, 14387.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.54458036E12, 2880.6666666666665], [1.54458006E12, 33722.166666666664], [1.54458E12, 31150.833333333332], [1.5445797E12, 31112.166666666668], [1.54458012E12, 33843.0], [1.54457982E12, 34249.0], [1.54457976E12, 32296.333333333332], [1.54457946E12, 23780.0], [1.54458042E12, 372.1666666666667], [1.54457988E12, 32934.333333333336], [1.54457958E12, 32881.166666666664], [1.54458048E12, 38.666666666666664], [1.54458018E12, 31643.833333333332], [1.54457952E12, 33234.0], [1.5445803E12, 29236.833333333332], [1.54457964E12, 33905.833333333336], [1.54458024E12, 33702.833333333336], [1.54457994E12, 32344.666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54458048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 775.4675324675325, "minX": 1.54457946E12, "maxY": 928.1684014292367, "series": [{"data": [[1.54458036E12, 800.0369127516778], [1.54458006E12, 869.7361330084549], [1.54458E12, 919.242203258339], [1.5445797E12, 928.1684014292367], [1.54458012E12, 855.9914310197091], [1.54457982E12, 847.3972622071675], [1.54457976E12, 900.2030829093095], [1.54457946E12, 822.107317073173], [1.54458042E12, 775.4675324675325], [1.54457988E12, 880.801144702084], [1.54457958E12, 883.4205497574601], [1.54458048E12, 786.25], [1.54458018E12, 910.6928364136255], [1.54457952E12, 866.1080570098899], [1.5445803E12, 889.7391735537207], [1.54457964E12, 853.8543121881661], [1.54458024E12, 849.7953535063837], [1.54457994E12, 895.6307531380737]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54458048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 775.4675324675325, "minX": 1.54457946E12, "maxY": 928.1682460773627, "series": [{"data": [[1.54458036E12, 800.0369127516778], [1.54458006E12, 869.7361330084549], [1.54458E12, 919.2415826221883], [1.5445797E12, 928.1682460773627], [1.54458012E12, 855.9914310197091], [1.54457982E12, 847.3969799604837], [1.54457976E12, 900.2029332535177], [1.54457946E12, 822.1069105691073], [1.54458042E12, 775.4675324675325], [1.54457988E12, 880.800997945407], [1.54457958E12, 883.4205497574601], [1.54458048E12, 786.25], [1.54458018E12, 910.6925309301973], [1.54457952E12, 866.1079115764978], [1.5445803E12, 866.6965289256166], [1.54457964E12, 853.8541696364914], [1.54458024E12, 849.7949232754892], [1.54457994E12, 895.6304542737595]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54458048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 539.2499999999999, "minX": 1.54457946E12, "maxY": 699.0676493405739, "series": [{"data": [[1.54458036E12, 606.9278523489932], [1.54458006E12, 663.9869571449061], [1.54458E12, 699.0676493405739], [1.5445797E12, 697.9165760447388], [1.54458012E12, 639.6792345044303], [1.54457982E12, 637.8283940163716], [1.54457976E12, 684.8093385213995], [1.54457946E12, 618.8471544715452], [1.54458042E12, 576.5844155844155], [1.54457988E12, 667.8519225124726], [1.54457958E12, 671.9016610318959], [1.54458048E12, 539.2499999999999], [1.54458018E12, 681.5556743546648], [1.54457952E12, 654.5317044793509], [1.5445803E12, 663.0991735537176], [1.54457964E12, 636.4372059871666], [1.54458024E12, 630.8758066829166], [1.54457994E12, 673.8197848176925]], "isOverall": false, "label": "POST Mutants", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54458048E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 647.0, "minX": 1.54457946E12, "maxY": 35688.0, "series": [{"data": [[1.54458036E12, 8607.0], [1.54458006E12, 35688.0], [1.54458E12, 22081.0], [1.5445797E12, 10069.0], [1.54458012E12, 4940.0], [1.54457982E12, 4805.0], [1.54457976E12, 24900.0], [1.54457946E12, 10057.0], [1.54458042E12, 1403.0], [1.54457988E12, 22032.0], [1.54457958E12, 21888.0], [1.54458048E12, 1230.0], [1.54458018E12, 22344.0], [1.54457952E12, 4935.0], [1.5445803E12, 10700.0], [1.54457964E12, 4884.0], [1.54458024E12, 4777.0], [1.54457994E12, 10007.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.54458036E12, 647.0], [1.54458006E12, 648.0], [1.54458E12, 652.0], [1.5445797E12, 658.0], [1.54458012E12, 650.0], [1.54457982E12, 648.0], [1.54457976E12, 652.0], [1.54457946E12, 649.0], [1.54458042E12, 661.0], [1.54457988E12, 647.0], [1.54457958E12, 648.0], [1.54458048E12, 661.0], [1.54458018E12, 651.0], [1.54457952E12, 654.0], [1.5445803E12, 648.0], [1.54457964E12, 649.0], [1.54458024E12, 649.0], [1.54457994E12, 652.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.54458036E12, 1212.0], [1.54458006E12, 1231.0], [1.54458E12, 1248.0], [1.5445797E12, 1226.0], [1.54458012E12, 1228.0], [1.54457982E12, 1217.0], [1.54457976E12, 1225.0], [1.54457946E12, 973.0], [1.54458042E12, 1210.0], [1.54457988E12, 1218.9000000000015], [1.54457958E12, 1193.0], [1.54458048E12, 1210.0], [1.54458018E12, 1219.0], [1.54457952E12, 1177.0], [1.5445803E12, 1212.0], [1.54457964E12, 1222.0], [1.54458024E12, 1214.0], [1.54457994E12, 1204.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.54458036E12, 2093.970000000005], [1.54458006E12, 1940.9800000000032], [1.54458E12, 2111.800000000032], [1.5445797E12, 1893.9900000000016], [1.54458012E12, 1898.0], [1.54457982E12, 1894.0], [1.54457976E12, 1897.0], [1.54457946E12, 1825.1000000000022], [1.54458042E12, 2093.970000000005], [1.54457988E12, 1869.0], [1.54457958E12, 1852.2599999999984], [1.54458048E12, 2093.970000000005], [1.54458018E12, 1861.9900000000016], [1.54457952E12, 1800.2099999999991], [1.5445803E12, 2090.9100000000144], [1.54457964E12, 1838.9900000000016], [1.54458024E12, 1847.0], [1.54457994E12, 1851.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.54458036E12, 1518.9500000000007], [1.54458006E12, 1583.9500000000007], [1.54458E12, 1628.9000000000015], [1.5445797E12, 1507.0], [1.54458012E12, 1682.0], [1.54457982E12, 1508.9500000000007], [1.54457976E12, 1514.9500000000007], [1.54457946E12, 1254.5], [1.54458042E12, 1516.0], [1.54457988E12, 1639.0], [1.54457958E12, 1498.8999999999978], [1.54458048E12, 1516.0], [1.54458018E12, 1516.0], [1.54457952E12, 1452.0999999999985], [1.5445803E12, 1518.9500000000007], [1.54457964E12, 1628.800000000003], [1.54458024E12, 1488.0], [1.54457994E12, 1501.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54458048E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 701.0, "minX": 1000.0, "maxY": 898.0, "series": [{"data": [[5000.0, 781.0], [10000.0, 846.5], [3000.0, 762.0], [6000.0, 772.0], [7000.0, 789.0], [1000.0, 741.0], [2000.0, 760.0], [4000.0, 784.0], [8000.0, 898.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5000.0, 701.0], [3000.0, 758.0], [2000.0, 750.0], [1000.0, 767.0], [4000.0, 840.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 10000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 701.0, "minX": 1000.0, "maxY": 898.0, "series": [{"data": [[5000.0, 781.0], [10000.0, 846.5], [3000.0, 762.0], [6000.0, 772.0], [7000.0, 789.0], [1000.0, 741.0], [2000.0, 760.0], [4000.0, 784.0], [8000.0, 898.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5000.0, 701.0], [3000.0, 758.0], [2000.0, 750.0], [1000.0, 764.0], [4000.0, 840.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 10000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.54457946E12, "maxY": 118.1, "series": [{"data": [[1.54458036E12, 9.3], [1.54458006E12, 116.28333333333333], [1.54458E12, 107.41666666666667], [1.5445797E12, 107.26666666666667], [1.54458012E12, 116.7], [1.54457982E12, 118.1], [1.54457976E12, 111.38333333333334], [1.54457946E12, 83.66666666666667], [1.54458042E12, 1.2833333333333334], [1.54457988E12, 113.56666666666666], [1.54457958E12, 113.38333333333334], [1.54458048E12, 0.11666666666666667], [1.54458018E12, 109.11666666666666], [1.54457952E12, 114.6], [1.5445803E12, 99.81666666666666], [1.54457964E12, 116.91666666666667], [1.54458024E12, 116.21666666666667], [1.54457994E12, 111.53333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54458048E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.54457946E12, "maxY": 117.98333333333333, "series": [{"data": [[1.54458036E12, 9.933333333333334], [1.54458006E12, 116.1], [1.54458E12, 107.28333333333333], [1.5445797E12, 107.18333333333334], [1.54458012E12, 116.5], [1.54457982E12, 117.98333333333333], [1.54457976E12, 111.2], [1.54457946E12, 81.9], [1.54458042E12, 1.2833333333333334], [1.54457988E12, 113.36666666666666], [1.54457958E12, 113.25], [1.54458048E12, 0.13333333333333333], [1.54458018E12, 109.0], [1.54457952E12, 114.4], [1.5445803E12, 100.65], [1.54457964E12, 116.76666666666667], [1.54458024E12, 115.91666666666667], [1.54457994E12, 111.46666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5445803E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.54458006E12, 0.18333333333333332], [1.54458E12, 0.13333333333333333], [1.5445797E12, 0.1], [1.54458012E12, 0.2], [1.54457982E12, 0.11666666666666667], [1.54457976E12, 0.16666666666666666], [1.54457946E12, 0.1], [1.54457988E12, 0.2], [1.54457958E12, 0.13333333333333333], [1.54458018E12, 0.11666666666666667], [1.54457952E12, 0.2], [1.5445803E12, 0.16666666666666666], [1.54457964E12, 0.15], [1.54458024E12, 0.3], [1.54457994E12, 0.06666666666666667]], "isOverall": false, "label": "403", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54458048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457946E12, "maxY": 117.98333333333333, "series": [{"data": [[1.54458036E12, 9.933333333333334], [1.54458006E12, 116.1], [1.54458E12, 107.28333333333333], [1.5445797E12, 107.18333333333334], [1.54458012E12, 116.5], [1.54457982E12, 117.98333333333333], [1.54457976E12, 111.2], [1.54457946E12, 81.9], [1.54458042E12, 1.2833333333333334], [1.54457988E12, 113.36666666666666], [1.54457958E12, 113.25], [1.54458048E12, 0.13333333333333333], [1.54458018E12, 109.0], [1.54457952E12, 114.4], [1.5445803E12, 100.65], [1.54457964E12, 116.76666666666667], [1.54458024E12, 115.91666666666667], [1.54457994E12, 111.46666666666667]], "isOverall": false, "label": "POST Mutants-success", "isController": false}, {"data": [[1.54458006E12, 0.18333333333333332], [1.54458E12, 0.13333333333333333], [1.5445797E12, 0.1], [1.54458012E12, 0.2], [1.54457982E12, 0.11666666666666667], [1.54457976E12, 0.16666666666666666], [1.54457946E12, 0.1], [1.54457988E12, 0.2], [1.54457958E12, 0.13333333333333333], [1.54458018E12, 0.11666666666666667], [1.54457952E12, 0.2], [1.5445803E12, 0.18333333333333332], [1.54457964E12, 0.15], [1.54458024E12, 0.3], [1.54457994E12, 0.06666666666666667]], "isOverall": false, "label": "POST Mutants-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54458048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.54457946E12, "maxY": 117.98333333333333, "series": [{"data": [[1.54458036E12, 9.933333333333334], [1.54458006E12, 116.1], [1.54458E12, 107.28333333333333], [1.5445797E12, 107.18333333333334], [1.54458012E12, 116.5], [1.54457982E12, 117.98333333333333], [1.54457976E12, 111.2], [1.54457946E12, 81.9], [1.54458042E12, 1.2833333333333334], [1.54457988E12, 113.36666666666666], [1.54457958E12, 113.25], [1.54458048E12, 0.13333333333333333], [1.54458018E12, 109.0], [1.54457952E12, 114.4], [1.5445803E12, 100.65], [1.54457964E12, 116.76666666666667], [1.54458024E12, 115.91666666666667], [1.54457994E12, 111.46666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.54458006E12, 0.18333333333333332], [1.54458E12, 0.13333333333333333], [1.5445797E12, 0.1], [1.54458012E12, 0.2], [1.54457982E12, 0.11666666666666667], [1.54457976E12, 0.16666666666666666], [1.54457946E12, 0.1], [1.54457988E12, 0.2], [1.54457958E12, 0.13333333333333333], [1.54458018E12, 0.11666666666666667], [1.54457952E12, 0.2], [1.5445803E12, 0.18333333333333332], [1.54457964E12, 0.15], [1.54458024E12, 0.3], [1.54457994E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54458048E12, "title": "Total Transactions Per Second"}},
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

