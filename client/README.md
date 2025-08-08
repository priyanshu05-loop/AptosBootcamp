# MedCycle - Medicine Return & Cashback Platform

MedCycle is a full-stack web application that allows users to return unused, sealed medicines and earn wallet cashback. The platform helps reduce medical waste while providing users with monetary incentives.

## 🚀 Features

### User Features
- **User Authentication**: Secure signup/login with email and phone
- **Medicine Return**: Upload medicine details with images and schedule pickup
- **Wallet System**: Earn 10-15% cashback and redeem at partner pharmacies
- **Pickup Tracking**: Real-time status tracking from request to cashback
- **Partner Integration**: Redeem cashback at Apollo, Netmeds, 1mg, PharmEasy

### Admin Features
- **Dashboard**: Overview of users, returns, and cashback statistics
- **Return Management**: Review and approve/reject medicine returns
- **User Management**: Monitor user activities and accounts
- **Analytics**: Track platform performance and popular medicines

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, React, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: JWT with bcrypt password hashing
- **Database**: MongoDB (schemas provided)
- **File Upload**: Support for image uploads (medicine strips and bills)
- **State Management**: React Context API

## 📁 Project Structure

\`\`\`
medcycle-app/
├── app/                          # Next.js App Router pages
│   ├── (auth)/
│   │   ├── login/               # Login page
│   │   └── signup/              # Signup page
│   ├── admin/                   # Admin dashboard
│   ├── dashboard/               # User dashboard
│   ├── return-medicine/         # Medicine return form
│   ├── wallet/                  # Wallet and transactions
│   ├── track-pickup/            # Pickup tracking
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   └── medicines/          # Medicine-related endpoints
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── home/                   # Home page components
│   ├── layout/                 # Layout components (navbar, footer)
│   ├── providers/              # Context providers
│   └── ui/                     # shadcn/ui components
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions and schemas
└── public/                     # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd medcycle-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # Database
   MONGODB_URI=mongodb://localhost:27017/medcycle
   
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   
   # File Upload (optional)
   CLOUDINARY_CLOUD_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage Guide

### For Users

1. **Sign Up**: Create an account with email, phone, and password
2. **Return Medicine**: 
   - Upload clear images of medicine strips and purchase bills
   - Fill in medicine details (name, quantity, expiry date)
   - Schedule pickup date and time
   - Provide pickup address
3. **Track Progress**: Monitor pickup status in real-time
4. **Earn Cashback**: Receive 10-15% cashback after verification
5. **Redeem**: Use wallet balance at partner e-pharmacies

### For Admins

1. **Login**: Use admin credentials (admin@medcycle.com)
2. **Review Returns**: Check submitted medicine returns with images
3. **Approve/Reject**: Make decisions based on image verification
4. **Monitor Users**: Track user activities and statistics
5. **Analytics**: View platform performance metrics

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Medicine Returns
- `POST /api/medicines/return` - Submit medicine return
- `GET /api/medicines/returns` - Get user's returns
- `PUT /api/medicines/returns/:id` - Update return status (admin)

### Wallet
- `GET /api/wallet/balance` - Get wallet balance
- `GET /api/wallet/transactions` - Get transaction history
- `POST /api/wallet/redeem` - Redeem cashback

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Accessibility**: ARIA labels and keyboard navigation support
- **Loading States**: Smooth loading indicators and skeleton screens
- **Error Handling**: User-friendly error messages and validation

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: Image validation and size limits
- **Role-based Access**: Admin and user role separation

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Configure reverse proxy (nginx/Apache)
4. Set up SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@medcycle.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 🔮 Future Enhancements

- **AI Integration**: Automated medicine verification using computer vision
- **Mobile App**: React Native mobile application
- **Real-time Notifications**: Push notifications for pickup updates
- **Blockchain**: Transparent donation tracking
- **Multi-language**: Support for regional languages
- **Advanced Analytics**: Machine learning insights for admins

---

Built with ❤️ for a sustainable healthcare future.
