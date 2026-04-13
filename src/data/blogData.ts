export interface Author {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  tagColor: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: Author;
  quote?: string;
  content: string[];
  keywords: string[];
}

export const AUTHORS: Record<string, Author> = {
  namle: {
    name: 'Coach Nam Lê',
    role: 'Chuyên gia dinh dưỡng & Master Trainer',
    bio: 'Với hơn 5 năm kinh nghiệm trong việc thiết kế thực đơn biến đổi hình thể, Coach Nam đã giúp hơn 200 hội viên tại Biên Hòa đạt được vóc dáng mơ ước qua kỷ luật và dinh dưỡng.',
    photo: '/images/doi_ngu.jpg'
  },
  steven: {
    name: 'Master Trainer Steven',
    role: 'Chuyên gia phục hồi & Kỹ thuật hình thể',
    bio: 'Steven chuyên sâu về tối ưu hóa chuyển động và ngăn ngừa chấn thương trong tập luyện cường độ cao.',
    photo: '/images/huan-luyen-vien-the-hinh.jpg'
  },
  mynguyen: {
    name: 'Admin My Nguyễn',
    role: 'Quản lý cộng đồng BienHoaGym',
    bio: 'Người giữ lửa cho cộng đồng BienHoaGym, chuyên gia về phong cách sống và quản lý thời gian hiệu quả.',
    photo: '/images/anh-gai-xinh-ngau-tap-gym-32.jpg'
  },
  tuananh: {
    name: 'Manager Tuấn Anh',
    role: 'Chuyên gia Chiến lược Tập luyện',
    bio: 'Với tư duy quản trị và thể hình kết hợp, Tuấn Anh mang đến cái nhìn toàn diện về thể hình.',
    photo: '/images/doi_ngu.jpg'
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'an-sang-gi-o-bien-hoa-de-du-chat',
    category: 'Dinh dưỡng',
    tagColor: 'bg-green-600',
    title: 'Ăn sáng gì ở Biên Hòa để đủ chất đi tập?',
    excerpt: 'Khám phá thực đơn bữa sáng "vàng" tại Biên Hòa giúp bạn bùng nổ năng lượng trong mọi buổi tập...',
    image: '/images/blog/nutrition.png',
    date: '12/04/2024',
    author: AUTHORS.namle,
    quote: 'Dinh dưỡng chiếm 70% thành công, 30% còn lại là kỷ luật tại phòng tập.',
    content: [
      'Bữa sáng là thời điểm "nhạy cảm" nhất của hệ tiêu hóa và cũng là nguồn cung cấp năng lượng chính cho những ai tập luyện vào buổi sáng hoặc đầu giờ chiều. Tại Biên Hòa, với nền ẩm thực phong phú, việc chọn đúng món ăn để vừa ngon miệng vừa đủ **Protein** và **Cardbohydrate** là một nghệ thuật.',
      'Sự lựa chọn số 1: **Phở Bò**. Một bát phở bò cung cấp khoảng 25-30g protein từ thịt bò tươi và tinh bột nhanh từ bánh phở giúp bổ sung glycogen nhanh chóng. Tuy nhiên, hãy yêu cầu "ít bánh" và "không nước béo" để kiểm soát lượng calo không cần thiết. Đừng quên vắt nhiều chanh để hỗ trợ hấp thụ sắt từ thịt bò.',
      'Sự lựa chọn số 2: **Hủ Tiếu Nam Vang**. Đây là món ăn có sự cân bằng tuyệt vời giữa đạm (tôm, thịt, trứng cút) và chất béo. Tuy nhiên, lượng natri trong nước dùng thường rất cao, dễ gây tích nước (bloating). Lời khuyên của Coach: Hãy ăn khô và dùng nước lèo riêng để chủ động kiểm soát gia vị.',
      'Sự lựa chọn số 3: **Bánh Mì Ốp La**. Nếu bạn đang vội, hãy chọn bánh mì với 2 quả trứng ốp la. Trứng cung cấp **Fat** tốt và vitamin D hỗ trợ cơ xương khớp. Hãy yêu cầu nhiều dưa leo và xà lách để bổ sung chất xơ, giúp ổn định đường huyết sau khi ăn tinh bột trắng.',
      'Mốc thời gian vàng: Luôn ăn sáng trước khi tập từ **60-90 phút**. Đây là khoảng thời gian lý tưởng để thức ăn chuyển hóa thành năng lượng sẵn sàng cung cấp cho cơ bắp, tránh tình trạng hạ đường huyết hoặc xốc hông khi vận động mạnh.'
    ],
    keywords: ['Protein', 'Cardbohydrate', '60-90 phút']
  },
  {
    id: '2',
    slug: 'loi-sai-pho-bien-khi-tap-squat',
    category: 'Kỹ thuật',
    tagColor: 'bg-red-600',
    title: 'Lỗi sai phổ biến khi tập Squat & Cách khắc phục',
    excerpt: 'Hướng dẫn chi tiết từ Master Trainer giúp bạn nâng tầm kỹ thuật Squat và đảm bảo an toàn tuyệt đối...',
    image: '/images/blog/technique.png',
    date: '10/04/2024',
    author: AUTHORS.steven,
    quote: 'Đừng tập cho xong bài, hãy tập cho đúng từng milimet chuyển động.',
    content: [
      'Squat được mệnh danh là "vua của các bài tập" vì khả năng huy động hầu hết các nhóm cơ lớn trên cơ thể. Tuy nhiên, 90% người mới tập tại Biên Hòa đều mắc phải những sai lầm có thể dẫn đến chấn thương mãn tính ở khớp gối và cột sống thắt lưng.',
      'Lỗi nghiêm trọng nhất: **Knee Valgus** (Đầu gối chụm vào nhau). Khi bạn hạ thấp trọng tâm, nếu đầu gối hướng vào trong thay vì hướng theo mũi chân, dây chằng chéo trước (ACL) sẽ phải chịu áp lực cực lớn. Cách khắc phục: Hãy sử dụng một dây Miniband quanh đùi để tạo lực phản kháng, giúp não bộ ghi nhớ việc đẩy đầu gối ra ngoài.',
      'Lỗi thứ hai: **Butt Wink** (Cong lưng dưới khi xuống sâu). Đây là kẻ thù của đĩa đệm. Nguyên nhân thường đến từ sự kém linh hoạt của cơ đùi sau và khớp háng. Nếu bạn thấy lưng mình bị cuộn lại ở điểm cuối, hãy dừng lại ngay ở vị trí lưng vẫn giữ được độ thẳng tự nhiên. Đừng cố xuống quá sâu nếu cơ thể chưa sẵn sàng.',
      'Lỗi thứ ba: **Nhấc gót chân khỏi sàn**. Khi gót chân bị nhấc lên, toàn bộ trọng lượng tạ sẽ dồn vào mũi chân và khớp gối, làm mất đi sự ổn định của khung xương. Bạn cần tập trung dồn trọng tâm vào giữa bàn chân và gót chân. Một đôi giày đế bằng hoặc giày nâng gót chuyên dụng sẽ là khoản đầu tư thông minh.',
      'Lời khuyên cuối cùng: Luôn bắt đầu buổi tập bằng ít nhất 10 phút khởi động khớp háng và cổ chân. Một động tác **Bodyweight Squat** hoàn hảo đáng giá hơn 100 lần tập sai với tạ nặng. Hãy nhờ các HLV tại BienHoaGym hỗ trợ quan sát form của bạn ở 3 góc độ: trước, sau và ngang.'
    ],
    keywords: ['Knee Valgus', 'Butt Wink', 'Bodyweight Squat']
  },
  {
    id: '3',
    slug: 'duy-tri-tap-luyen-khi-ban-ron',
    category: 'Lifestyle',
    tagColor: 'bg-amber-500',
    title: 'Duy trì việc tập luyện khi công việc bận rộn',
    excerpt: 'Làm thế nào để vẫn sở hữu body 6 múi dù công việc văn phòng chiếm 10-12 tiếng mỗi ngày...',
    image: '/images/blog/lifestyle.png',
    date: '08/04/2024',
    author: AUTHORS.mynguyen,
    quote: 'Bạn bận rộn không có nghĩa là bạn phải bỏ bê cơ thể mình.',
    content: [
      'Trong thời đại 4.0, sự bận rộn đã trở thành rào cản lớn nhất đối với việc chăm sóc sức khỏe. Tại một thành phố năng động như Biên Hòa, việc cân bằng giữa deadline và phòng tập là một thử thách thực sự. Nhưng hãy nhớ: "Người muốn sẽ tìm cách, người không muốn sẽ tìm lý do".',
      'Chiến thuật số 1: **Quy tắc 35 phút vàng**. Bạn không cần 2 tiếng ở phòng tập để có kết quả. Hãy áp dụng phương pháp **HIIT** hoặc các bài tập Compound (phối hợp nhiều nhóm cơ). Tập trung vào cường độ thay vì thời gian. 35 phút tập tập trung cao độ, không điện thoại, không tán gẫu sẽ đốt cháy calo gấp đôi 90 phút tập hời hợt.',
      'Chiến thuật số 2: **Biến lịch tập thành cuộc họp quan trọng**. Đừng đợi khi rảnh mới đi tập, hãy "book" lịch tập vào Google Calendar của bạn giống như một cuộc họp với đối tác quan trọng nhất: chính bản thân bạn. Khung giờ từ 5:30 - 6:30 sáng tại BienHoaGym là thời điểm lý tưởng để nạp năng lượng trước khi bắt đầu guồng quay công việc.',
      'Chiến thuật số 3: **Chuẩn bị đồ tập từ đêm hôm trước**. Khoa học chứng minh rằng việc chuẩn bị sẵn giày, quần áo và bình nước sẽ giảm bớt gánh nặng tâm lý khi đưa ra quyết định đi tập vào sáng sớm. Sự chuẩn bị chính là chìa khóa của sự kỷ luật.',
      'Hãy bắt đầu từ những mục tiêu nhỏ nhất, như việc duy trì 3 buổi tập mỗi tuần. Khi kết quả bắt đầu hiện rõ trên gương, chính động lực đó sẽ giúp bạn quản lý thời gian tốt hơn để không bao giờ bỏ lỡ buổi tập nào nữa.'
    ],
    keywords: ['Quy tắc 35 phút vàng', 'HIIT', 'kỷ luật']
  },
  {
    id: '4',
    slug: 'boxing-giam-stress-hieu-qua',
    category: 'Boxing',
    tagColor: 'bg-rose-600',
    title: 'Boxing - Liều thuốc giảm stress cực mạnh cho dân văn phòng',
    excerpt: 'Thoát khỏi áp lực deadline bằng những cú đấm đầy uy lực tại phòng tập Boxing chuyên nghiệp...',
    image: '/images/blog/boxing.png',
    date: '06/04/2024',
    author: AUTHORS.tuananh,
    quote: 'Hãy trút hết áp lực vào bao cát, và mang về một tâm thế vững vàng.',
    content: [
      'Căng thẳng công việc tích tụ lâu ngày nếu không được giải phóng sẽ dẫn đến tình trạng Burn-out (kiệt sức). Boxing không chỉ là môn võ, nó là một liệu pháp tâm lý mạnh mẽ giúp bạn tái lập sự cân bằng.',
      'Khi bạn tung ra những cú đấm liên hoàn (Combos), não bộ sẽ tập trung hoàn toàn vào kỹ thuật và nhịp thở, giúp tạm quên đi những lo âu về deadline hay doanh số. Quá trình này giúp đốt cháy trung bình **800 - 1000 calo** mỗi buổi tập - mức tiêu thụ năng lượng cao nhất trong các môn thể thao Fitness.',
      'Boxing còn kích thích cơ thể sản sinh mạnh mẽ **Endorphin** và **Dopamine**, mang lại cảm giác hưng phấn và tự tin sau mỗi buổi tập. Tại BienHoaGym, hệ thống bao cát cao cấp và sàn tập tiêu chuẩn sẽ đảm bảo an toàn tối đa cho cổ tay và khớp vai của bạn.',
      'Hơn cả một buổi tập đổ mồ hôi, lớp Boxing là nơi bạn rèn luyện sự quyết đoán và tinh thần thép. "Chiến đấu" với chính mình trong gương sẽ giúp bạn có cái nhìn tích cực hơn khi đối mặt với những thử thách ngoài đời thực.'
    ],
    keywords: ['Combos', 'Burn-out', '800 - 1000 calo']
  },
  {
    id: '5',
    slug: 'thu-gian-phuc-hoi-sau-tap',
    category: 'Phục hồi',
    tagColor: 'bg-indigo-600',
    title: 'Tầm quan trọng của phục hồi đối với sự phát triển cơ bắp',
    excerpt: 'Tại sao giấc ngủ và việc giãn cơ lại quyết định 50% kết quả luyện tập của bạn?',
    image: '/images/blog/recovery.png',
    date: '04/04/2024',
    author: AUTHORS.steven,
    quote: 'Cơ bắp không lớn lên trong phòng tập, chúng lớn lên khi bạn đang nghỉ ngơi.',
    content: [
      'Sai lầm lớn nhất của các hội viên là tập luyện điên cuồng 7 ngày trong tuần. Hãy nhớ rằng bài tập chỉ là hành động "phá hủy" sợi cơ một cách có kiểm soát. Quá trình "xây dựng" lại và làm chúng to khỏe hơn chỉ thực sự diễn ra khi bạn nghỉ ngơi.',
      'Kỹ thuật phục hồi chủ động: Sử dụng **Foam Roller** (con lăn masage) ngay sau buổi tập để giải tỏa các điểm nút (trigger points) trong cơ bắp. Hành động này giúp tăng cường lưu thông máu và giảm tình trạng **DOMS** (đau cơ khởi phát muộn) vào ngày hôm sau.',
      'Dinh dưỡng phục hồi: Cung cấp 20-30g protein nhanh trong vòng 30 phút sau tập là điều bắt buộc. Ngoài ra, việc bổ sung đầy đủ Magie và Kẽm trước khi ngủ sẽ giúp hệ thần kinh dịu lại, đưa bạn vào giấc ngủ sâu nhanh hơn.',
      'Giấc ngủ là "ngân hàng dự trữ": Trong lúc ngủ, cơ thể tiết ra lượng hormone tăng trưởng tự nhiên cao nhất. Một giấc ngủ chất lượng từ 7-8 tiếng sẽ giúp đẩy nhanh tốc độ phục hồi cơ bắp lên gấp 2 lần. Đừng bao giờ đánh đổi giấc ngủ lấy những thói quen vô bổ vào ban đêm nếu bạn thực sự muốn thay đổi hình thể.'
    ],
    keywords: ['Foam Roller', 'DOMS', '7-8 tiếng']
  },
  {
    id: '6',
    slug: 'inbody-hieu-dung-chi-so-co-the',
    category: 'Công nghệ',
    tagColor: 'bg-blue-600',
    title: 'Hiểu đúng về chỉ số InBody - Đừng chỉ nhìn vào cân nặng',
    excerpt: 'Tại sao cân nặng không đổi nhưng quần áo lại rộng ra? Giải mã các bí ẩn của máy quét InBody...',
    image: '/images/blog/bodyscan.png',
    date: '02/04/2024',
    author: AUTHORS.namle,
    quote: 'Số cân nặng là ảo, tỷ lệ mỡ và cơ mới là thật.',
    content: [
      'Nhiều bạn mới tập tại Biên Hòa thường cảm thấy nản lòng khi nhìn vào chiếc cân mỗi sáng - cân nặng không giảm, thậm chí còn tăng. Tuy nhiên, sự thật là chiếc cân truyền thống không thể nói lên toàn bộ câu chuyện về sự chuyển hóa của cơ thể bạn.',
      'Công nghệ **InBody 770** tại phòng tập của chúng tôi sẽ bóc tách cơ thể bạn thành 4 thành phần chính: Nước, Đạm, Khoáng chất và Mỡ. Khi bạn tập luyện đúng cách, khối lượng mỡ (Body Fat Mass) sẽ giảm xuống trong khi khối lượng cơ xương (**SMM**) tăng lên. Vì cơ nặng hơn mỡ nhưng chiếm thể tích ít hơn, bạn sẽ trông thon gọn và săn chắc hơn dù cân nặng không đổi.',
      'Một chỉ số cực kỳ quan trọng khác là **Tỷ lệ mỡ nội tạng**. Đây là loại mỡ bao quanh các cơ quan quan trọng và là tác nhân chính gây ra các bệnh tim mạch hay tiểu đường. Nếu chỉ số này trên mức 10, bạn cần nghiêm túc điều chỉnh chế độ dinh dưỡng ngay lập tức.',
      'Lời khuyên của Coach: Hãy quét InBody định kỳ 4 tuần một lần vào buổi sáng khi chưa ăn để có kết quả chính xác nhất. Đừng để những con số vô hồn trên bàn cân quyết định nỗ lực của bạn. Hãy nhìn vào sự thay đổi của tỷ lệ cơ - mỡ trong báo cáo InBody để thấy mình đang tiến bộ thực sự.'
    ],
    keywords: ['InBody 770', 'Tỷ lệ mỡ', 'SMM']
  },
  {
    id: '7',
    slug: 'bi-quyet-yoga-cho-nguoi-moi',
    category: 'Yoga',
    tagColor: 'bg-teal-600',
    title: 'Yoga cho người mới bắt đầu - Từ cứng ngắc đến dẻo dai',
    excerpt: 'Đừng lo lắng nếu bạn không thể chạm tay vào ngón chân. Yoga là hành trình dành cho tất cả mọi người...',
    image: '/images/blog/yoga.png',
    date: '30/03/2024',
    author: AUTHORS.mynguyen,
    quote: 'Yoga không phải là chạm vào ngón chân, mà là những gì bạn học được trên đường đi xuống.',
    content: [
      'Nhiều người tập Gym tại Biên Hòa thường có định kiến rằng "Yoga chỉ dành cho phụ nữ" hoặc "Yoga quá chậm". Tuy nhiên, đây là bộ môn bổ trợ hoàn hảo nhất để giúp bạn phá vỡ giới hạn sức mạnh trong phòng tạ.',
      'Lợi ích số 1: **Cải thiện độ linh hoạt (Flexibility)**. Khi các nhóm cơ được giãn mở đúng cách, biên độ chuyển động (Range of Motion) của bạn sẽ rộng hơn. Điều này giúp bạn Squat sâu hơn, Deadlift chuẩn hơn và giảm thiểu tối đa nguy cơ rách cơ hay chấn thương dây chằng.',
      'Lợi ích số 2: **Kiểm soát hơi thở (Pranayama)**. Trong Yoga, hơi thở là chìa khóa. Việc học cách hít thở sâu bằng cơ hoành sẽ giúp bạn cung cấp nhiều oxy hơn cho máu, hỗ trợ sức bền tuyệt vời khi thực hiện các set tạ nặng cuối cùng hoặc các bài cardio cường độ cao.',
      'Lớp Yoga tại BienHoaGym không chỉ tập trung vào các tư thế khó, mà tập trung vào sự kết nối giữa tâm trí và cơ thể. Chỉ sau 4 tuần luyện tập, bạn sẽ thấy tình trạng đau mỏi vai gáy do ngồi văn phòng và sự căng cứng cơ bắp sau khi tập tạ giảm đi rõ rệt.'
    ],
    keywords: ['Flexibility', 'Pranayama', 'giãn cơ']
  },
  {
    id: '8',
    slug: 'thuc-pham-bo-sung-can-thiet',
    category: 'Supplements',
    tagColor: 'bg-sky-600',
    title: 'Whey Protein và Creatine: Lợi ích và hướng dẫn sử dụng',
    excerpt: 'Thực phẩm bổ sung không phải là thuốc tiên, nhưng chúng là trợ thủ đắc lực...',
    image: '/images/blog/supplements.png',
    date: '28/03/2024',
    author: AUTHORS.namle,
    quote: 'Thực phẩm bổ sung chỉ tốt khi nền tảng dinh dưỡng tự nhiên đã vững chắc.',
    content: [
      'Tại quầy Service của BienHoaGym, câu hỏi chúng tôi nhận được nhiều nhất là: "Tập bao lâu thì nên uống Whey?". Câu trả lời ngắn gọn: Thực phẩm bổ sung (Supplements) chỉ thực sự có ý nghĩa khi chế độ ăn tự nhiên của bạn đã đạt chuẩn.',
      '**Whey Protein**: Đây là nguồn đạm hấp thụ siêu nhanh, lý tưởng để phục hồi cơ bắp ngay lập tức sau buổi tập. Thay vì phải ăn một lượng lớn ức gà khô khốc, một muỗng Whey giúp bạn nạp nhanh 25g đạm mà không gây áp lực cho hệ tiêu hóa. Đừng lạm dụng nó để thay thế hoàn toàn bữa chính.',
      '**Creatine Monohydrate**: Nếu bạn muốn tăng sức mạnh bùng nổ để đẩy thêm vài kg tạ, đây là trợ thủ đắc lực. Creatine giúp tái tạo năng lượng **ATP** nhanh chóng trong cơ bắp. Hãy nhớ uống nhiều nước hơn (ít nhất 3 lít mỗi ngày) khi sử dụng Creatine để đạt hiệu quả tối ưu nhất.',
      'Hãy bắt đầu từ những thứ cơ bản nhất như Vitamin tổng hợp và dầu cá để hỗ trợ sức khỏe nền tảng, trước khi đầu tư vào những hũ Pre-workout đắt tiền. Chuyên gia của chúng tôi luôn sẵn sàng tư vấn danh mục supplements phù hợp nhất với túi tiền và mục tiêu của bạn.'
    ],
    keywords: ['Whey Protein', 'Creatine Monohydrate', 'ATP']
  },
  {
    id: '9',
    slug: 'loi-ich-tap-nhom-group-x',
    category: 'Cộng đồng',
    tagColor: 'bg-rose-500',
    title: 'Tại sao tập luyện cùng nhóm (Group X) lại tạo động lực hơn?',
    excerpt: 'Sức mạnh của nhịp điệu và sự kết nối trong các lớp Zumba, Aerobic tại BienHoaGym...',
    image: '/images/blog/cardio.png',
    date: '25/03/2024',
    author: AUTHORS.tuananh,
    quote: 'Hòa mình vào nhịp điệu, bạn sẽ quên đi sự mệt mỏi.',
    content: [
      'Con người là sinh vật có tính xã hội cao, và việc tập luyện cũng không ngoại lệ. Tại Biên Hòa Gym, chúng tôi tin rằng một lớp học sôi động với 20 người cùng nhịp bước sẽ mang lại kết quả mà 10 giờ tập đơn độc không thể có được.',
      'Tại sao **Group X** lại hiệu quả? Đó là sự cộng hưởng năng lượng. Khi bạn sắp bỏ cuộc ở phút 45 của lớp Zumba, nhịp nhạc dồn dập và sự hào hứng của những người xung quanh sẽ kéo bạn tiếp tục. Nghiên cứu cho thấy tập luyện theo nhóm giúp bạn giải tỏa stress tốt hơn **25%** so với tập một mình.',
      'Các lớp Les Mills, Aerobic hay Zumba được thiết kế khoa học để giữ nhịp tim của bạn ở "Fat Burning Zone" suốt 1 giờ đồng hồ. Bạn sẽ đốt cháy calo mà không cảm thấy đó là một cực hình hay sự ép buộc.',
      'Hơn cả một buổi tập, đây là nơi những tình bạn mới nảy nở. Một cộng đồng cùng chung mục tiêu sống khỏe, sống đẹp chính là "đòn bẩy" mạnh mẽ nhất giúp bạn không bao giờ rời xa lộ trình của mình.'
    ],
    keywords: ['Group X', 'Zumba', 'đốt mỡ']
  }
];
