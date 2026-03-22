# Deployment Guide - Netlify + GitHub

This guide walks you through deploying your website to Netlify with Decap CMS integration.

## Prerequisites

- GitHub account
- Netlify account (free tier works fine)
- Git installed locally

## Step 1: Push to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with Decap CMS setup"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Via Netlify Dashboard

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** > **"Import an existing project"**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 20 (set in Environment variables if needed)
7. Click **"Deploy site"**

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts to connect your GitHub repo
```

## Step 3: Enable Netlify Identity (Required for CMS)

1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** > **Identity**
3. Click **"Enable Identity"**
4. Under **Registration preferences**, select **"Invite only"** (recommended)
5. Scroll down to **Services** section
6. Click **"Enable Git Gateway"**

## Step 4: Invite CMS Users

1. In the **Identity** tab, click **"Invite users"**
2. Enter the email address(es) of people who should have CMS access
3. They will receive an invitation email
4. Users click the link in the email to set their password

## Step 5: Access Your CMS

Once deployed and Identity is configured:

1. Visit `https://your-site-name.netlify.app/admin`
2. Click **"Login with Netlify Identity"**
3. Enter your credentials
4. Start managing content!

## Environment Variables (Optional)

If you need to add environment variables:

1. Go to **Site settings** > **Environment variables**
2. Add any required variables
3. Redeploy your site

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Site settings** > **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS
4. Netlify will automatically provision SSL certificate

## Continuous Deployment

Your site is now set up for continuous deployment:

- Every push to `main` branch triggers a new build
- CMS changes are committed directly to your GitHub repo
- Netlify automatically rebuilds and deploys

## Testing Before Production

Always test locally before deploying:

```bash
# Terminal 1: Start proxy server
npm run cms-proxy

# Terminal 2: Start dev server
npm run dev

# Visit http://localhost:3000/admin to test CMS
```

## Troubleshooting

### Build Fails

- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### CMS Authentication Issues

- Verify Identity is enabled
- Check that Git Gateway is enabled
- Ensure users have accepted invitations
- Clear browser cache and try again

### Content Not Updating

- Check that changes were committed to GitHub
- Verify the build completed successfully
- Check file paths in `config.yml` match your content structure

## Monitoring

- **Build logs**: Available in Netlify dashboard
- **Deploy notifications**: Configure in Site settings > Build & deploy > Deploy notifications
- **Analytics**: Available in Netlify dashboard (may require paid plan)

## Backup Strategy

Your content is safe because:
- All content is stored in markdown files in your GitHub repo
- Every CMS change creates a Git commit
- GitHub maintains full version history
- You can roll back to any previous version

## Next Steps

1. Customize your domain
2. Set up email notifications for deploys
3. Configure branch deploys for staging (optional)
4. Add more CMS users as needed
5. Monitor your site's performance

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Decap CMS Documentation](https://decapcms.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
