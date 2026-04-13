export interface BlogPost {
  id: string;
  category: string;
  tagColor: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'nutrition-guide',
    category: 'Dinh dưỡng',
    tagColor: 'bg-green-600',
    title: 'Ăn sáng gì ở Biên Hòa để đủ chất đi tập?',
    excerpt: 'Khám phá những món ăn sáng quen thuộc tại Biên Hòa nhưng vẫn đảm bảo macro cho người tập gym...',
    image: '/images/blog/nutrition.png',
    date: '12/04/2024',
    author: 'Coach Nam Lê',
    content: [
      'Bữa sáng là bữa ăn quan trọng nhất trong ngày, đặc biệt là với những người đang theo đuổi lộ trình tập luyện hình thể tại Biên Hòa. Nhưng với thực đơn phong phú từ Phở, Hủ Tiếu đến Bánh Mì, đâu là lựa chọn tối ưu?',
      '1. Phở bò nhiều thịt, ít bánh: Phở cung cấp lượng protein dồi dào từ thịt bò và tinh bột nhanh từ bánh phở, giúp bạn có năng lượng tức thì trước buổi tập sáng.',
      '2. Bánh mì ốp la (2 trứng): Đây là lựa chọn "bình dân" nhưng cực kỳ chất lượng với protein từ trứng và chất béo tốt.',
      'Lưu ý: Bạn nên ăn sáng trước khi tập ít nhất 60-90 phút để đảm bảo tiêu hóa tốt nhất.'
    ]
  },
  {
    id: 'squat-technique',
    category: 'Kỹ thuật',
    tagColor: 'bg-red-600',
    title: 'Lỗi sai phổ biến khi tập Squat & Cách khắc phục',
    excerpt: 'Đừng để đầu gối của bạn phải trả giá. Học ngay kỹ thuật Squat chuẩn từ đội ngũ Master Trainer...',
    image: '/images/blog/technique.png',
    date: '10/04/2024',
    author: 'Master Trainer Steven',
    content: [
      'Squat là "vua của các bài tập" nhưng cũng là bài tập dễ gây chấn thương nhất nếu thực hiện sai kỹ thuật. Tại BienHoaGym, chúng tôi nhận thấy 3 lỗi phổ biến nhất:',
      'Lỗi 1: Đầu gối chụm vào nhau (Knee Valgus). Điều này gây áp lực cực lớn lên dây chằng chéo trước.',
      'Lỗi 2: Nhấc gót chân. Nguyên nhân thường do độ linh hoạt cổ chân kém.',
      'Lỗi 3: Cong lưng dưới (Butt Wink). Lỗi này cực kỳ nguy hiểm cho cột sống nếu bạn đang gánh tạ nặng.',
      'Hãy bắt đầu với Bodyweight Squat trước khi thêm tạ, và đừng ngần ngại nhờ các HLV tại phòng giúp bạn căn chỉnh form.'
    ]
  },
  {
    id: 'busy-lifestyle',
    category: 'Lifestyle',
    tagColor: 'bg-amber-500',
    title: 'Duy trì việc tập luyện khi công việc bận rộn',
    excerpt: 'Bí quyết quản lý thời gian và giữ vững động lực cho những người bận rộn tại thành phố Biên Hòa...',
    image: '/images/blog/lifestyle.png',
    date: '08/04/2024',
    author: 'Admin My Nguyễn',
    content: [
      'Bạn quá bận rộn với công việc tại văn phòng hay kinh doanh riêng? Đừng để điều đó ngăn cản hành trình thay đổi bản thân.',
      'Quy tắc 30 phút: Thay vì cố gắng tập 2 tiếng, hãy dành ra 30 phút tập trung cao độ với các bài tập Compound. Kết quả sẽ khiến bạn bất ngờ.',
      'Tập luyện sớm: Hãy thử chuyển lịch tập sang 5:30 sáng. Đây là thời điểm vắng vẻ nhất tại BienHoaGym và giúp bạn sảng khoái suốt cả ngày làm việc.',
      'Động lực không tự nhiên mà có, nó đến từ thói quen.'
    ]
  },
  {
    id: 'yoga-mindfulness',
    category: 'Yoga & Tâm trí',
    tagColor: 'bg-indigo-500',
    title: 'Yoga - Chìa khóa cân bằng cho tâm trí giữa lòng thành phố',
    excerpt: 'Lợi ích của việc kết hợp Yoga vào lộ trình tập Gym để giảm stress và tăng độ linh hoạt cơ thể...',
    image: '/images/blog/yoga.png',
    date: '06/04/2024',
    author: 'Yogi Phương Thảo',
    content: [
      'Giữa sự nhộn nhịp của Biên Hòa, một giờ tập Yoga tại phòng tập chuyên biệt của chúng tôi sẽ giúp bạn tìm lại sự tĩnh lặng.',
      'Yoga giúp giãn cơ sau những buổi tập tạ nặng, giảm thiểu nguy cơ chuột rút và tăng cường khả năng phục hồi của sợi cơ.',
      'Việc hít thở đúng cách trong Yoga cũng giúp bạn kiểm soát nhịp tim tốt hơn khi thực hiện các bài cardio cường độ cao.',
      'Chúng tôi có các lớp Yoga từ cơ bản đến nâng cao vào mọi khung giờ trong tuần.'
    ]
  },
  {
    id: 'supplements-101',
    category: 'Thực phẩm bổ sung',
    tagColor: 'bg-blue-600',
    title: 'Whey Protein và Creatine: Có thực sự cần thiết?',
    excerpt: 'Giải mã những hiểu lầm về thực phẩm bổ sung và cách sử dụng chúng hiệu quả nhất...',
    image: '/images/blog/supplements.png',
    date: '04/04/2024',
    author: 'Dr. Fitness',
    content: [
      'Nhiều bạn mới tập thường lầm tưởng rằng thực phẩm bổ sung là "thuốc tiên". Thực tế, chúng chỉ hỗ trợ khi chế độ ăn của bạn chưa đủ.',
      'Whey Protein: Tiện lợi để bổ sung protein nhanh ngay sau tập, giúp cơ bắp phục hồi tức thì.',
      'Creatine: Hoạt chất hỗ trợ sức mạnh và sự bùng nổ trong các bài tập ngắn hạn.',
      'Lời khuyên: Luôn ưu tiên thực phẩm tự nhiên trước khi nghĩ tới thực phẩm bổ sung. Hãy tham vấn chuyên gia tại quầy Service của BienHoaGym.'
    ]
  },
  {
    id: 'cardio-community',
    category: 'Cộng đồng',
    tagColor: 'bg-rose-600',
    title: 'Sức mạnh của tập luyện nhóm và cộng đồng BienHoaGym',
    excerpt: 'Tại sao tập luyện cùng bạn bè lại mang lại kết quả tốt hơn 40% so với tập một mình?',
    image: '/images/blog/cardio.png',
    date: '02/04/2024',
    author: 'Manager Tuấn Anh',
    content: [
      'BienHoaGym không chỉ là nơi có máy móc, đây là một cộng đồng. Khi bạn thấy người khác nỗ lực, bạn sẽ có thêm động lực để cố gắng.',
      'Các buổi tập nhóm Cardio hoặc Group X không chỉ giúp đốt mỡ mà còn là nơi kết nối những người cùng đam mê.',
      'Tình bạn nảy nở từ những giọt mồ hôi là những tình bạn bền chặt nhất. Đừng đi một mình, hãy đi cùng nhau.',
      'Tham gia ngay giải chạy nội bộ BienHoaGym Run sắp tới nhé!'
    ]
  }
];
