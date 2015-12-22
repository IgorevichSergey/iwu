angular.module('pastTransactionPage.ctrl', [])
    .controller('pastTransactionPageCtrl', function(){
        var self = this;
        self.example_config = [
            {
                date:'October 29, 2015',
                order:'1000056839',
                status:'Complete',
                total_price:'$15.89',
                details:[
                    {
                        title:'ISBN 4444444',
                        rental_Used: '$10.00',
                        status:'Pending',
                        status_details:{}
                    },
                    {
                        title:'ISBN 4444444',
                        rental_Used: '$10.00',
                        status:'Pending',
                        status_details:{
                            text: "Shipping Details:Name. Address: Line 1 State, IN 99999. Shipping Speed: Normal"
                        }
                    },
                    {
                        title:'ISBN 4444444',
                        rental_Used: '$10.00',
                        status:'Pending',
                        status_details:{}
                    }
                ],
                transaction_id:1
            },
            {
                date:'October 29, 2015',
                order:'1000056839',
                status:'Complete',
                total_price:'$15.89',
                details:[
                    {
                        title:'ISBN 3333333',
                        Rental_Used: '$32.00',
                        status:'Shipped',
                        status_details:{
                            text: "Shipping Details:Name. Address: Line 1 State, IN 99999. Shipping Speed: Normal"
                        }
                    }
                ],
                transaction_id:2
            }
        ]
    });