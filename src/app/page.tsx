"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, BookOpen, Calendar, Crown, GraduationCap, Handshake, HelpCircle, Mail, Newspaper, Puzzle, Quote, Shield, Sparkles, Target, Trophy, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Events", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Chess Club"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Master the Art of Chess"
          description="Join our passionate community of chess players and elevate your game through expert coaching, tournaments, and strategic analysis"
          tag="Welcome to Excellence"
          tagIcon={Crown}
          buttons={[
            { text: "Join Our Club", href: "contact" },
            { text: "View Events", href: "blog" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394256319-vrvkzauo.jpg"
          imageAlt="Chess board with pieces in strategic position"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Chess Club"
          description="We are a dedicated community of chess enthusiasts committed to advancing the game through education, competition, and camaraderie"
          tag="Our Story"
          tagIcon={Shield}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Expert Coaching",
              description: "Learn from certified chess instructors and improve your strategic thinking",
              icon: GraduationCap
            },
            {
              title: "Competitive Play",
              description: "Participate in regular tournaments and rated games to test your skills",
              icon: Trophy
            },
            {
              title: "Welcoming Community",
              description: "Join players of all skill levels in a supportive learning environment",
              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394259608-r5nivh6c.jpg"
          imageAlt="Chess club members playing together"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="What We Offer"
          description="Comprehensive chess programs designed to elevate your game"
          tag="Our Programs"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          features={[
            { title: "Weekly Training Sessions", icon: Calendar },
            { title: "Tournament Preparation", icon: Target },
            { title: "Opening Theory Classes", icon: BookOpen },
            { title: "Tactical Puzzles Workshop", icon: Puzzle }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Achievements"
          description="Numbers that showcase our club's success and growth"
          tag="Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "1", value: "150+", description: "Active Members" },
            { id: "2", value: "25", description: "Tournaments Won" },
            { id: "3", value: "8", description: "Years of Excellence" },
            { id: "4", value: "95%", description: "Member Satisfaction" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced chess professionals dedicated to your improvement"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          members={[
            {
              id: "1",
              name: "Master Alexander",
              role: "Head Coach",
              description: "International Master with 20+ years of coaching experience specializing in positional play",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394260221-qca8gtli.jpg",
              imageAlt: "Master Alexander - Head Coach",
              socialLinks: [
                { icon: "Mail", url: "mailto:coach@chessclub.com" },
                { icon: "Linkedin", url: "https://linkedin.com/in/masteralexander" }
              ]
            },
            {
              id: "2",
              name: "Sarah Martinez",
              role: "Club President",
              description: "FIDE Master and tournament director with passion for developing young talent",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394260777-35c7vncm.jpg",
              imageAlt: "Sarah Martinez - Club President",
              socialLinks: [
                { icon: "Mail", url: "mailto:president@chessclub.com" },
                { icon: "Twitter", url: "https://twitter.com/sarahchess" }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Event Organizer",
              description: "Expert in chess event management and community building with focus on inclusive tournaments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394261667-9bkczja2.jpg",
              imageAlt: "David Chen - Event Organizer",
              socialLinks: [
                { icon: "Mail", url: "mailto:events@chessclub.com" },
                { icon: "Globe", url: "https://chessevents.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Members Say"
          description="Real experiences from chess players who've grown with our club"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Tournament Player",
              company: "Local Chess Champion",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394262432-szkwphsq.jpg",
              imageAlt: "Emily Rodriguez - Tournament Player"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Adult Beginner",
              company: "Software Engineer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394263217-fwkxf89c.jpg",
              imageAlt: "Michael Thompson - Adult Beginner"
            },
            {
              id: "3",
              name: "Jessica Park",
              role: "Youth Player",
              company: "High School Student",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394264004-zim3rdys.jpg",
              imageAlt: "Jessica Park - Youth Player"
            },
            {
              id: "4",
              name: "Robert Wilson",
              role: "Senior Member",
              company: "Retired Teacher",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394264752-2matp3e2.jpg",
              imageAlt: "Robert Wilson - Senior Member"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Affiliated With Leading Chess Organizations"
          description="We maintain partnerships with prestigious chess institutions worldwide"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394265273-m1u4vg3u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394265959-2k09tlvt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394266497-vy23r32y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394267273-q7yjdese.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394267799-h3zdpeno.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394268311-jjgi0at6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394268847-hvsko2e7.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about joining and participating in our chess club"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "Do I need to know how to play chess to join?",
              content: "Not at all! We welcome players of all skill levels, from complete beginners to experienced tournament players. Our coaches will help you learn the basics and develop your skills at your own pace."
            },
            {
              id: "2",
              title: "What are the membership fees?",
              content: "Our monthly membership is $25 for adults and $15 for students under 18. This includes access to all training sessions, club tournaments, and equipment use."
            },
            {
              id: "3",
              title: "When do you meet?",
              content: "We meet every Tuesday and Thursday evening from 6:00 PM to 9:00 PM, and Saturday mornings from 10:00 AM to 1:00 PM. Special tournament training sessions are scheduled based on upcoming events."
            },
            {
              id: "4",
              title: "Do you provide chess sets and boards?",
              content: "Yes! We have plenty of tournament-quality chess sets, boards, and clocks available for all members to use during club sessions and practice games."
            },
            {
              id: "5",
              title: "Can I participate in tournaments?",
              content: "Absolutely! We organize internal tournaments monthly and help members prepare for external rated tournaments. Our coaches provide specific tournament preparation training."
            },
            {
              id: "6",
              title: "Are there opportunities for youth players?",
              content: "Yes! We have dedicated youth programs with age-appropriate coaching methods. Young players can participate in scholastic tournaments and receive mentorship from experienced players."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Chess Insights"
          description="Stay updated with chess strategies, tournament reports, and club news"
          tag="Blog"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Strategy",
              title: "Mastering Chess Openings",
              excerpt: "Learn the fundamental principles of chess openings and how to gain an early advantage in your games",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394269372-veohbgw6.jpg",
              imageAlt: "Chess opening position on board",
              authorName: "Master Alexander",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394260221-qca8gtli.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Tournament",
              title: "Preparing for Your First Tournament",
              excerpt: "Essential tips and mental preparation techniques for competitive chess success",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394269862-ve603czw.jpg",
              imageAlt: "Chess tournament preparation",
              authorName: "Sarah Martinez",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394260777-35c7vncm.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Tactics",
              title: "Endgame Mastery Guide",
              excerpt: "Key endgame patterns and techniques every chess player should know to convert winning positions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394270578-obnkhzz6.jpg",
              imageAlt: "Chess endgame position",
              authorName: "David Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394261667-9bkczja2.jpg",
              date: "08 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Join Us"
          title="Ready to Elevate Your Chess Game?"
          description="Subscribe to our newsletter for updates on events, training sessions, and exclusive chess content delivered to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Join Club"
          termsText="By signing up, you agree to receive updates about club activities and chess-related content. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Chess Club"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Training Programs", href: "features" }
              ]
            },
            {
              items: [
                { label: "Events & Tournaments", href: "blog" },
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}