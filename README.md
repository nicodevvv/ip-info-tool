# IP Information Tool

A modern web application built with React, TypeScript, and Vite that provides detailed information about IP addresses, including geolocation, ISP details, threat analysis, and more.

## Features

- 🌍 **Geolocation Data**: Get city, region, country, and coordinates for any IP address
- 🏢 **ISP Information**: View ASN details and network provider information
- 🔒 **Security Analysis**: Check for threats, proxies, VPNs, and known attackers
- 💱 **Currency & Language**: Display local currency and spoken languages
- 🌐 **Multi-language Support**: Interface available in English and Spanish
- 📋 **Copy to Clipboard**: Easily copy IP addresses, coordinates, and other data
- 🎨 **Terminal-style UI**: Clean, retro-inspired design

## Technologies Used

- **React 19** with TypeScript
- **Vite** for fast development and building
- **i18next** for internationalization
- **IPData API** for IP information

## Prerequisites

Before you begin, you need to:

1. Register for a free account at [IPData.co](https://ipdata.co/)
2. Obtain your API key from the dashboard
3. Have Node.js (v18 or higher) installed

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ip-info-tool
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your IPData API key to the `.env` file:
```env
VITE_API_KEY=your_api_key_here
```

## Usage

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## API Configuration

This project uses the [IPData API](https://ipdata.co/). The API provides:

- Geolocation data (city, region, country, coordinates)
- ASN and ISP information
- Threat intelligence (proxies, VPNs, known attackers)
- Time zone and currency information
- Language data

**Free tier limitations:**
- 1,500 requests per day
- HTTPS support
- All features included

For higher limits, check their [pricing plans](https://ipdata.co/pricing.html).

## Project Structure

```
ip-info-tool/
├── public/
│   └── locales/          # Translation files
│       ├── en.json
│       └── es.json
├── src/
│   ├── components/       # React components
│   ├── services/         # API service layer
│   ├── mocks/           # Mock data for development
│   ├── types.d.ts       # TypeScript interfaces
│   └── i18n.ts          # i18next configuration
├── .env.example         # Environment variables template
└── README.md
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_KEY` | Your IPData API key | Yes |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- IP data provided by [IPData.co](https://ipdata.co/)
- Icons and UI inspiration from retro terminal interfaces