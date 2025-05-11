import ceo from "../assets/images/team/ceo.JPG";
import vifon from "../assets/images/partners/vifon.png";
import acecook from "../assets/images/partners/acecook.png";
import cpgroup from "../assets/images/partners/cpgroup.png";

export const translations = {
    en: {
        header: {
            'name': 'KHANH HOA SALT'
        },
        nav: {
            home: 'Home',
            about: 'About',
            products: 'Products',
            contact: 'Contact'
        },
        footer: {
            name: "Khanh Hoa Salt Co, Ltd",
            saying: "If you have any questions or need help, feel free to contact us.",
            phone: "Phone",
            phoneText: "(+84) 2253581589",
            address: "Address",
            addressText: "Phu Hai, Anh Dung, Duong Kinh, Hai Phong, Viet Nam",
            email: "Email",
            emailText: "thangkhanhhoa67@gmail.com",
            quickLinks: "Quick Links",
            home: "Home",
            about: "About",
            products: "Products",
            contact: "Contact",     
            ourProducts: "Our Products",
        },
        home: {
            hero: {
                title: 'Khanh Hoa Salt Co, Ltd',
                slogan: 'PURE SALT FOR VIETNAMESE HEALTH',
                contactUs: 'CONTACT US'
            },
            partners: {
                title: 'Our Partners',
                text: 'What Our Customer Says About Our Services',
                items: [
                    {
                        name: "VIFON",
                        img: vifon,
                        description: "Vifon is a brand that provides industrial food products and particularly instant noodles, we highly evaluate the quality of Khanh Hoa Salt products. The coarse salt, pure and natural with a salty taste and stable, very suitable for the standards of strict in instant noodle manufacturing. Not only ensuring the taste, Khanh Hoa Salt also brings peace of mind about food safety when having strict production processes."
                },
                {
                    name: "ACECOOK",
                    img: acecook,
                    description: "Acecook highly trusts Khanh Hoa Salt as a partner to supply ingredients for its products because this is a type of salt with high purity, even distribution, salty and stable taste, very suitable for the standards of strict in instant noodle manufacturing. Not only ensuring the taste, Khanh Hoa Salt also brings peace of mind about food safety when having strict production processes. We see Khanh Hoa Salt as a strategic partner that we can trust in the supply chain of raw materials for Acecook."
                },
                {
                    name: "C.P. GROUP",
                    img: cpgroup,
                    description: "The salt product at Khanh Hoa Salt has high purity, rich natural minerals and stable composition, very suitable for nutrition formulas in the livestock industry. Using Khanh Hoa Salt helps us ensure the quality of the final product, while contributing to improving the health of livestock. This is a reliable raw material partner that C.P fully trusts when cooperating for a long time."
                    }
                ]
            }
        },
        about: {
            title: 'About Us',
            description: 'Khanh Hoa Salt Co, Ltd is a company that specializes in providing a variety of products related to salt, including: iodine salt, table salt, pure salt, industrial salt, and other salt products. \n We are proud to have a diverse product catalog with high quality and committed to providing the best service to our customers.',
            items: [
                {
                    title: "Vision",
                    description: "We want to become a top company in salt production and supply chain in Southeast Asia by 2028 and Asia by 2035."
                },
                {
                    title: "Mission",
                    description: "We want to provide high quality salt products for the health of Vietnamese consumers."
                },
                {
                    title: "History",
                    description: "Khanh Hoa Salt Co, Ltd was established in 2002, headquartered in Hai Phong City. We started exporting salt from Vietnam to Japan since 2005."
                }
            ],
            value: 'Core Values',
            valueText: [   
                {
                    title: "Quality and Food Safety",
                    description: "Apply strict quality management system (HACCP, ISO 22000, GMP) from mining to packaging to ensure product quality and comply with the VSATTP standard of the Ministry of Health."
                },
                {
                    title: "Community Health",
                    description: "Develop I-salt products, supplementing essential minerals to prevent diseases such as hypothyroidism, heart disease,... and proudly be a unit in the national program to prevent goiter."
                },
                {
                    title: "Social Responsibility",
                    description: "Ensure to purchase salt from salt farmers with stable prices, transparent. Create job opportunities for salt farmers and local community development."
                },
                {
                    title: "Innovation and Development",
                    description: "Always innovate, employ the latest scientific and technological advances, apply into production and smart packaging."
                }
            ],
            ourTeam: 'Our Team',
            ourTeamText: [
                {
                    name: "Nguyen Van A",
                    position: "CEO",
                    img: ceo,
                },
                {
                    name: "Nguyen Van B",
                    position: "Vice President",
                    img: ceo,
                },
            ],
        },  
        products: {
            title: 'Our Products',
            text: 'Khanh Hoa Salt Co, Ltd specializes in providing a variety of products related to salt, including: iodine salt, table salt, pure salt, industrial salt, and other salt products. \n We are proud to have a diverse product catalog with high quality and committed to providing the best service to our customers.',
            readMore: 'Read More',  
            companyName: 'Khanh Hoa Salt Co, Ltd',
            slogan: 'PURE SALT FOR VIETNAMESE HEALTH',  
            contactUs: 'CONTACT US',
            products: {
                common: {
                    ingredients: 'Ingredients:',
                    status: 'Status:',
                    expiration: 'Expiration:',
                    storage: "Storage:",
                    weight: "Weight:",
                    quality: "Quality:",
                    certificate: "Certificate:",
                },
                product_1: {
                    name: 'Khánh Vinh Refined Salt',
                    ingredientsText: '100% NaCl',
                    statusText: 'The salt is in refined, dry crystals form with no visible impurities.',
                    expirationText: '5 years from date of production.',
                    storageText: "The product is packaged in a polyethylene bag to ensure quality according to current health regulations, with a polypropylene outer packaging.",
                    weightText: "The product's weight ranges between 25kg, 50kg, 1 tonne, suitable for all uses. Measurement error is compliant with current regulations of Ministry of Science and Technology.",
                    qualityText: "Compliant with national standards for refined salt QCVN 01 - 194:2021/BNNPTNT",
                    certificateText: ": ISO 22000:2018, first issued on 01/07/2016, renewed on 06/07/2022.",
                    usageText: "Best used for instant noodles, sauces, instant soups, etc.",
                },
                product_2: {
                    name: 'Khánh Vinh Pure Salt',   
                    ingredientsText: '100% NaCl',
                    statusText: 'The salt is in refined, dry crystals form with no visible impurities.',
                    expirationText: '5 years from date of production.',
                    storageText: "The product is packaged in a polyethylene bag to ensure quality according to current health regulations, with a polypropylene outer packaging.",
                    weightText: "The product's weights range between 150g, 200g, 300g, 1kg, 20kg,... 25kg, 50kg, 1 tonne, suitable for all uses. Measurement error is compliant with current regulations of Ministry of Science and Technology.",
                    qualityText: "Compliant with national standards for pure salt QCVN 01 - 194:2021/BNNPTNT",
                    certificateText: ": ISO 22000:2018, first issued on 01/07/2016, renewed on 06/07/2022.",
                    usageText: "Best used for feeding animals.",
                },

            }
        },  
        contact: {
            title: 'Contact Us',
            text: 'If you have any questions or need help, feel free to contact us.',
            youHaveAnyQuestions: 'You have any questions?',
            sendUsMessage: 'Send Us Message',
            yourName: 'Your Name',
            yourEmail: 'Your Email',
            yourSubject: 'Your Subject',
            companyName: 'Khanh Hoa Salt Co, Ltd',
            slogan: 'PURE SALT FOR VIETNAMESE HEALTH',
            address: 'Address: Phu Hai, Anh Dung, Duong Kinh, Hai Phong, Viet Nam',
            phone: 'Phone: (+84) 2253581589',
            email: 'Email: thangkhanhhoa67@gmail.com',
            hours: 'Monday - Friday: 8:00 - 17:00, Saturday - Sunday: 8:00 - 12:00',
        }
    },
    vi: {
        header: {
            'name': 'MUỐI KHÁNH HOÀ'
        },
        nav: {
            home: 'Trang Chủ',
            about: 'Giới Thiệu',
            products: 'Sản Phẩm',
            contact: 'Liên Hệ'
        },
        footer: {
            name: "Công Ty TNHH Muối Khánh Hoà",
            saying: "Liên hệ với chúng tôi để nhận được sự hỗ trợ tốt nhất",
            phone: "Điện Thoại",
            phoneText: "(0225) 3581589",
            address: "Địa Chỉ",
            addressText: "Khu Phú Hải, phường Anh Dũng, quận Dương Kinh, Thành phố Hải Phòng, Việt Nam",
            email: "Email",
            emailText: "thangkhanhhoa67@gmail.com",
            quickLinks: "Đường Dẫn",
            home: "Trang Chủ",
            about: "Về Chúng Tôi",
            products: "Sản Phẩm",
            contact: "Liên Hệ",
            ourProducts: "Sản Phẩm",
        },
        home: {     
            hero: {
                title: 'Công ty TNHH Muối Khánh Hoà',
                slogan: 'VỊ MẶN TINH KHIẾT CHO SỨC KHỎE VIỆT',
                contactUs: 'LIÊN HỆ'
            },
            partners: {
                title: 'Đối Tác Của Chúng Tôi',
                text: 'Khách Hàng Nói Gì Về Chúng Tôi',
                items: [
                    {
                        name: "VIFON",
                        img: vifon,
                    description: "Là một thương hiệu cung cấp các sản phẩm thực phẩm công nghiệp và đặc biệt là các dòng sản phẩm ăn liền, chúng tôi đánh giá cao chất lượng sản phẩm của Muối Khánh Hòa. Hạt muối khô, sạch có vị mặn thanh và có nguồn gốc tự nhiên, được khai thác và chế biến theo quy trình nghiêm ngặt đảm bảo giữ được độ tinh khiết và hàm lượng khoáng chất cần thiết. Chúng tôi tin tưởng Muối Khánh Hòa là đối tác cung cấp nguyên liệu uy tín, góp phần nâng cao chất lượng sản phẩm đến tay người tiêu dùng."
                },
                {
                    name: "ACECOOK",
                    img: acecook,
                    description: "Acecook rất tin tưởng lựa chọn Muối Khánh Hòa làm đối tác cung cấp nguyên liệu làm gia vị cho sản phẩm của mình bởi đây là loại muối có độ tinh khiết cao, hạt đều, có vị mặn dịu và ổn định, rất phù hợp với tiêu chuẩn khắt khe trong chế biến thực phẩm ăn liền. Không chỉ đảm bảo về mặt hương vị, muối Khánh Hòa còn mang lại sự an tâm về an toàn vệ sinh thực phẩm khi có quy trình sản xuất nghiêm ngặt. Chúng tôi xem Muối Khánh Hòa là đối tác chiến lược đáng tin cậy trong chuỗi cung ứng nguyên liệu cho Acecook."
                },
                {
                    name: "C.P. GROUP",
                    img: cpgroup,
                    description: "Sản phẩm muối tại Muối Khánh Hòa có độ tinh khiết cao, giàu khoáng chất tự nhiên và ổn định về thành phần, rất phù hợp để đưa vào các công thức dinh dưỡng trong ngành chăn nuôi. Việc sử dụng muối Khánh Hòa giúp chúng tôi đảm bảo chất lượng sản phẩm đầu ra, đồng thời góp phần nâng cao sức khỏe vật nuôi. Đây là một đối tác nguyên liệu đáng tin cậy mà C.P hoàn toàn yên tâm khi hợp tác lâu dài."
                    }
                ]
            }
        },
        about: {
            title: 'Về Chúng Tôi',
            description: 'Công ty TNHH Muối Khánh Hòa là đơn vị chuyên cung cấp đa dạng các sản phẩm về muối, bao gồm: muối i-ốt, muối tinh, muối tinh khiết, muối công nghiệp,... và các sản phẩm muối chuyên biệt khác. \n Chúng tôi tự hào sở hữu danh mục sản phẩm đa dạng, phong phú với chất lượng cao và cam kết phục vụ khách hàng một cách tốt nhất.',
            items: [
                {
                    title: "Tầm nhìn",
                    description: "Hướng tới trở thành doanh nghiệp top 1 trong lĩnh vực sản xuất và cung cấp các sản phẩm về muối tại Đông Nam Á vào năm 2028 và Châu Á vào năm 2035."
                },
                {
                    title: "Sứ mệnh",
                    description: "Cung cấp sản phẩm muối chất lượng cao vì sức khỏe người tiêu dùng Việt."
                },
                {
                    title: "Lịch sử",
                    description: "Công ty TNHH Muối Khánh Hòa được thành lập vào năm 2002, có trụ sở đặt tại Thành phố Hải Phòng. Chúng tôi là một trong những đơn vị xuất khẩu muối sang thị trường Nhật Bản tại Việt Nam từ 2005."
                }
            ],
            value: 'Giá trị cốt lõi',
            valueText: [
                {
                    title: "Chất lượng và vệ sinh an toàn thực phẩm",
                    description: "Áp dụng hệ thống quản lý chất lượng nghiêm ngặt (HACCP, ISO 22000, GMP) từ việc khai thác đến đóng gói nhằm đảm bảo chất lượng của sản phẩm và tuân thủ tiêu chuẩn VSATTP của Bộ Y tế."
                },
                {
                    title: "Sức khỏe cộng đồng",
                    description: "Phát triển các sản phẩm muối I-ốt, bổ sung khoáng chất thiết yếu để phòng ngừa những bệnh như suy giảm tuyến giáp, tim mạch,... và tự hào là đơn vị nằm trong chương trình Quốc gia phòng chống bướu cổ. Đồng thời, giáo dục người tiêu dùng về việc sử dụng muối hợp lý."
                },
                {
                    title: "Trách nhiệm xã hội",
                    description: "Đảm bảo thu mua muối từ diêm dân với giá cả ổn định, minh bạch. Tạo công ăn việc làm cho người dân vùng muối và đầu tư phát triển cơ sở hạ tầng hỗ trợ cộng đồng địa phương."
                },
                {
                    title: "Đổi mới và phát triển",
                    description: "Luôn cập nhật, cải tiến các tiến bộ về khoa học kỹ thuật, áp dụng vào việc sản xuất và đóng gói thông minh giúp tối ưu hóa quy trình."
                }
            ],
            ourTeam: 'Đội Ngũ Của Chúng Tôi',
            ourTeamText: [
                {
                    name: "Nguyễn Văn A",
                    position: "Tổng Giám Đốc",
                    img: ceo,
                },
                {
                    name: "Nguyễn Văn B",
                    position: "Phó Tổng Giám Đốc",
                    img: ceo,
                },
            ],
        },  
        products: {
            title: 'Sản Phẩm Của Chúng Tôi',
            text: 'Công ty TNHH Muối Khánh Hòa là đơn vị chuyên cung cấp đa dạng các sản phẩm về muối, bao gồm: muối i-ốt, muối tinh, muối tinh khiết, muối công nghiệp,... và các sản phẩm muối chuyên biệt khác. \n Chúng tôi tự hào sở hữu danh mục sản phẩm đa dạng, phong phú với chất lượng cao và cam kết phục vụ khách hàng một cách tốt nhất.',
            readMore: 'Xem Thêm',
            companyName: 'Công Ty TNHH Muối Khánh Hoà',
            slogan: 'VỊ MẶN TINH KHIẾT CHO SỨC KHỎE VIỆT',
            contactUs: 'LIÊN HỆ',
            products: {
                common: {
                    ingredients: 'Thành phần:',
                    status: 'Trạng thái:',
                    expiration: 'Thời hạn sử dụng:',
                    storage: "Đóng gói:",
                    weight: "Khối lượng tịnh:",
                    quality: "Chất lượng:",
                    certificate: "Giấy chứng nhận:",
                },
                product_1: {
                    name: 'Muối tinh Khánh Vinh',
                    ingredientsText: '100% NaCl',
                    statusText: 'Muối ở dạng tinh thể nhỏ, khô rời, không nhìn thấy tạp chất.',
                    expirationText: '5 năm kể từ ngày sản xuất.',
                    storageText: "Sản phẩm được đóng gói bằng túi Polietilen đảm bảo chất lượng theo quy định hiện hành của Bộ Y tế, bên ngoài là bao PP",
                    weightText: "Sản phẩm có đầy đủ các loại định lượng như: 25kg, 50kg, 1 tấn phù hợp với mọi mục đích sử dụng. Sai số phù hợp với Quy định hiện hành của Bộ Khoa học công nghệ",
                    qualityText: "Phù hợp với quy chuẩn quốc gia đối với muối tinh QCVN 01 - 194:2021/BNNPTNT",
                    certificateText: ": ISO 22000:2018, được cấp lần đầu ngày 01/07/2016 và được cấp lại ngày 06/07/2022.",
                    usageText: "Sản phẩm tốt nhất để cho sản xuất bột canh, tương ớt, mì ăn liền,....",
                },
                product_2: {
                    name: 'Muối tinh khiết Khánh Vinh',
                    ingredientsText: '100% NaCl',
                    statusText: 'Muối ở dạng tinh thể nhỏ, khô rời, không nhìn thấy tạp chất.',
                    expirationText: '5 năm kể từ ngày sản xuất.',
                    storageText: "Sản phẩm được đóng gói bằng túi Polietilen đảm bảo chất lượng theo quy định hiện hành của Bộ Y tế, bên ngoài là bao PP",
                    weightText: "Sản phẩm có đầy đủ các loại định lượng như: 150g, 200g, 300g, 1kg, 20kg,... 25kg, 50kg, 1 tấn phù hợp với mọi mục đích sử dụng. Sai số phù hợp với Quy định hiện hành của Bộ Khoa học công nghệ",
                    qualityText: "Phù hợp với quy chuẩn quốc gia đối với muối tinh QCVN 01 - 194:2021/BNNPTNT",
                    certificateText: ": ISO 22000:2018, được cấp lần đầu ngày 01/07/2016 và được cấp lại ngày 06/07/2022.",
                    usageText: "Được sử dụng cho thức ăn của gia súc.",
                },

            }
        },
        contact: {
            title: 'Liên Hệ Chúng Tôi',
            text: 'Nếu bạn có bất kỳ câu hỏi nào hoặc cần trợ giúp, vui lòng liên hệ với chúng tôi.',
            youHaveAnyQuestions: 'Quý khách có câu hỏi?',
            sendUsMessage: 'Gửi Tin Nhắn Tới Chúng Tôi',
            yourName: 'Họ và Tên',
            yourEmail: 'Email',
            yourSubject: 'Tiêu Đề',
            writeYourMessage: 'Nội Dung Tin Nhắn',
            companyName: 'Công Ty TNHH Muối Khánh Hoà',
            slogan: 'VỊ MẶN TINH KHIẾT CHO SỨC KHỎE VIỆT',
            address: 'Địa Chỉ: Phú Hải, phường Anh Dũng, quận Dương Kinh, Thành phố Hải Phòng, Việt Nam',
            phone: 'Điện Thoại: (+84) 2253581589',
            email: 'Email: thangkhanhhoa67@gmail.com',
            hours: 'Thứ Hai - Thứ Sáu: 8:00 - 17:00, Thứ Bảy - Chủ Nhật: 8:00 - 12:00',
        }
    }
};