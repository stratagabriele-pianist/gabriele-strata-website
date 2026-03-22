# Decap CMS Setup Guide

This website uses Decap CMS (formerly Netlify CMS) to manage content for concerts, media, and biographies.

## Local Development & Testing (Without Using Netlify Build Credits)

To test the CMS locally without deploying to Netlify:

### 1. Start the Proxy Server

In one terminal window, run:

```bash
npm run cms-proxy
```

This starts the Netlify CMS proxy server on port 8081.

### 2. Start the Development Server

In another terminal window, run:

```bash
npm run dev
```

This starts your Next.js development server on port 3000.

### 3. Access the CMS

Open your browser and navigate to:

```
http://localhost:3000/admin
```

You can now add, edit, and delete content without needing to authenticate or use Netlify build credits. All changes are made directly to your local files.

## Content Structure

### Concerts

Located in `content/concerts/`

- **Type**: upcoming or past
- **Date**: Concert date
- **Venue**: Venue name
- **Location**: City, Country
- **Program**: Concert program details
- **Time**: Performance time (for upcoming concerts)
- **Ticket Link**: URL to ticket purchase (optional)

### Media

Located in `content/media/`

**For Recordings:**
- **Type**: recording
- **Title**: Recording title
- **Year**: Release year
- **Label**: Record label
- **Description**: Brief description
- **Link**: URL to streaming/purchase (optional)

**For Videos:**
- **Type**: video
- **Title**: Video title
- **Year**: Recording year
- **Venue**: Performance venue
- **Link**: URL to video (optional)

### Biographies

Located in `content/bio/`

Three biography files (one per language):
- `en.md` - English biography
- `fr.md` - French biography
- `it.md` - Italian biography

Each biography supports markdown formatting.

## Production Setup (Netlify)

### 1. Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to **Identity** tab
3. Click **Enable Identity**

### 2. Enable Git Gateway

1. In the Identity tab, scroll to **Services**
2. Click **Enable Git Gateway**

### 3. Invite Users

1. In the Identity tab, click **Invite users**
2. Enter email addresses for CMS users
3. Users will receive an invitation email

### 4. Configure Registration (Optional)

By default, registration is open. To restrict it:

1. Go to **Identity** > **Settings and usage**
2. Under **Registration preferences**, select **Invite only**

### 5. Access Production CMS

Once deployed, access the CMS at:

```
https://your-site.netlify.app/admin
```

Users will need to authenticate using Netlify Identity.

## File Structure

```
content/
├── bio/
│   ├── en.md
│   ├── fr.md
│   └── it.md
├── concerts/
│   └── [concert-files].md
└── media/
    └── [media-files].md

public/
└── admin/
    ├── config.yml    # CMS configuration
    └── index.html    # CMS admin interface

lib/
└── content.ts        # Content fetching utilities
```

## Tips

- **Local Testing**: Always test CMS changes locally before deploying
- **Backup**: Content is stored in markdown files in the `content/` folder - these are version controlled with Git
- **Images**: Upload images through the CMS to the `public/imgs/` folder
- **Previews**: The CMS provides live previews when editing content

## Troubleshooting

### CMS won't load locally

Make sure both servers are running:
- Proxy server: `npm run cms-proxy` (port 8081)
- Dev server: `npm run dev` (port 3000)

### Changes not appearing on site

After making changes in the CMS:
1. The markdown files are updated automatically
2. Refresh your browser to see changes (Next.js will hot-reload)

### Production authentication issues

1. Verify Netlify Identity is enabled
2. Check that Git Gateway is enabled
3. Ensure users have been invited and accepted invitations
