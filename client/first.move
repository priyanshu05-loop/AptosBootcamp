// module my_addrx::Practice{
//     //to print something to the console
//     use std::debug::print;

//     fun primitive_types(){
//         //integer
//         let a : u8 = 10;
//         print(&a);

//         //address
//         let address1: address = @ my_addrx;
//         print(&address1);
//         let address2: address = @0x1;
//         print(&address2);
//     }

//     #[test]
//     fun test_primitive_types(){
//         primitive_types();
//     }
// }


module my_addrx:: A{

    public fun A_fun():u8{
        return 1
    }
}

module my_addrx::B{
    use std::debug::print;

    fun B_fun():u8{
        return my_addrx::A::A_fun()
    }

    #[test]
    fun testing(){
        let a = B_fun();
        print(&a);
    }
}