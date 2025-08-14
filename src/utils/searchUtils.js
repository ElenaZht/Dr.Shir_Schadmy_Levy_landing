import { articles } from '../data/articles.js';

// Content data for different sections
const sectionContent = {
  about: {
    title: "אודות",
    content: `פיזיותרפיסטית מוסמכת (M.Sc.PT) בעלת למעלה מ-20 שנות ניסיון עשיר בתחומי השיקום והטיפול. מתמחה באופן מיוחד בטיפול בכאב כרוני ובשנים האחרונות משמשת פיזיותרפיסטית במכון לרפואת כאב בקריה הרפואית רמב"ם, שם הצטרפה לצוות בשנת 2020/2021 ומטפלת בשיטות טיפול חדשות למקרים מורכבים. תחומי התמחותה העיקריים כוללים: טיפול בכאב כרוני (כולל כאבים על רקע כוויות), שיקום נוירולוגי ואורתופדי, פיזיותרפיה אורתופדית ורפואת שלד-שריר, מניפולציה פאשיאלית ועוד שיר שדמי לוי פיזיותרפיסטית`,
    url: "/#about"
  },
  specializations: {
    title: "תחומי התמחות",
    content: `פאשיאל מניפוליישן כטיפול במערכת שריר שלד ובעיות ויסצרליות. פאשיאל מניפוליישן (Fascial Manipulation®) היא גישת טיפול מתקדמת המתמקדת בזיהוי וטיפול בהפרעות ברקמת הפאשיה – רשת רקמות חיבור העוטפת את השרירים, העצמות והאיברים הפנימיים. כאב מיופציאלי ודיקור מערבי טיפול בנקודות הדק ושחרור כאבי שרירים. כאב מיופציאלי מתבטא ככאב עמוק בשרירים וברקמת החיבור (פאשיה), ולרוב מקורו בנקודות הדק (Trigger Points). דיקור מערבי (Dry Needling) הוא כלי טיפולי יעיל ביותר להתמודדות עם כאב מיופציאלי. טיפול ב-TMD וכאבי ראש כאבי פנים וצוואר - טיפול במפרק הלסת. הפרעות במפרק הלסת (Temporomandibular Disorders – TMD) כוללות מגוון רחב של תסמינים, ביניהם כאבים בלסת, קליקים, הגבלה בפתיחת הפה וכאבים המוקרנים לאזורי הפנים והראש. טיפול בכאבי גב צוואר שיקום נוירולוגי אורטופדי`,
    url: "/#specializations"
  },
  appointment: {
    title: "זימון תור",
    content: `זימון תור לטיפול פיזיותרפי, מרפאת תל אביב, מרפאת רמת גן, קביעת פגישה, ייעוץ טלפוני, הערכה ראשונית, אבחון וטיפול. תיאום מועד פגישה התייעצות ראשונית`,
    url: "/#appointment"
  },
  testimonials: {
    title: "מכתבי תודה",
    content: `המלצות ומכתבי תודה ממטופלים, ביקורות חיוביות, טיפול מקצועי, שביעות רצון מטופלים, תוצאות טיפול מוצלחות, מטופלים מרוצים, המלצות לקוחות, חוות דעת`,
    url: "/#testimonials"
  },
  contact: {
    title: "צור קשר",
    content: `פרטי קשר, אימייל shirschadmy@gmail.com, טלפון 054-237-2032, מרפאת תל אביב רחוב קינג ג'ורג' 33, מרפאת רמת גן רחוב רות 13, שעות פעילות, יצירת קשר, כתובת מרפאה, מיקום, הגעה למרפאה`,
    url: "/#contact"
  },
  hero: {
    title: "דף הבית",
    content: `שיר שדמי לוי פיזיותרפיסטית מוסמכת מומחית בכאב כרוני מטפלת מקצועית פיזיותרפיה מתקדמת טיפול איכותי שיקום רפואי מכון כאב רמבם ניסיון עשיר שירות מקצועי`,
    url: "/"
  },
  articles: {
    title: "מאמרים",
    content: `מאמרים מקצועיים, מחקרים, פרסומים מדעיים, כתבות, עדכונים רפואיים, מידע מקצועי, ידע בתחום הפיזיותרפיה, מחקר מדעי, ספרות מקצועית`,
    url: "/#articles"
  }
};

// Search function that searches through all content
export const searchSiteContent = (searchTerm) => {
  const results = [];
  const lowercaseSearchTerm = searchTerm.toLowerCase();

  // Search in articles
  articles.forEach(article => {
    const searchFields = [
      { field: 'title', weight: 3 },
      { field: 'excerpt', weight: 2 },
      { field: 'content', weight: 1 },
      { field: 'tags', weight: 2 }
    ];

    let matchScore = 0;
    let matches = [];

    searchFields.forEach(({ field, weight }) => {
      let fieldValue = '';
      if (field === 'tags' && Array.isArray(article[field])) {
        fieldValue = article[field].join(' ');
      } else {
        fieldValue = String(article[field] || '');
      }

      const lowercaseFieldValue = fieldValue.toLowerCase();
      if (lowercaseFieldValue.includes(lowercaseSearchTerm)) {
        matchScore += weight;
        
        // Find the position and create a snippet
        const index = lowercaseFieldValue.indexOf(lowercaseSearchTerm);
        const start = Math.max(0, index - 50);
        const end = Math.min(fieldValue.length, index + searchTerm.length + 50);
        const snippet = fieldValue.substring(start, end);
        
        matches.push({
          field,
          snippet: (start > 0 ? '...' : '') + snippet + (end < fieldValue.length ? '...' : ''),
          weight
        });
      }
    });

    if (matchScore > 0) {
      results.push({
        type: 'article',
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        url: `/article/${article.id}`,
        score: matchScore,
        matches,
        readTime: article.readTime,
        publishDate: article.publishDate
      });
    }
  });

  // Search in section content
  Object.entries(sectionContent).forEach(([key, section]) => {
    const searchFields = [
      { field: 'title', content: section.title, weight: 3 },
      { field: 'content', content: section.content, weight: 1 }
    ];

    let matchScore = 0;
    let matches = [];

    searchFields.forEach(({ field, content, weight }) => {
      const lowercaseContent = content.toLowerCase();
      if (lowercaseContent.includes(lowercaseSearchTerm)) {
        matchScore += weight;
        
        // Find the position and create a snippet
        const index = lowercaseContent.indexOf(lowercaseSearchTerm);
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + searchTerm.length + 50);
        const snippet = content.substring(start, end);
        
        matches.push({
          field,
          snippet: (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : ''),
          weight
        });
      }
    });

    if (matchScore > 0) {
      results.push({
        type: 'section',
        id: key,
        title: section.title,
        excerpt: section.content.substring(0, 150) + '...',
        url: section.url,
        score: matchScore,
        matches
      });
    }
  });

  // Sort results by score (highest first) and then by type (sections first, then articles)
  return results.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    // If scores are equal, prioritize sections over articles
    if (a.type !== b.type) {
      return a.type === 'section' ? -1 : 1;
    }
    return 0;
  });
};

// Function to highlight search terms in text
export const highlightSearchTerm = (text, searchTerm) => {
  if (!searchTerm || !text) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-300 px-1 rounded">$1</mark>');
};

// Function to create a snippet with highlighted search term
export const createHighlightedSnippet = (text, searchTerm, maxLength = 200) => {
  if (!searchTerm || !text) return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  
  const lowercaseText = text.toLowerCase();
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  const index = lowercaseText.indexOf(lowercaseSearchTerm);
  
  if (index === -1) {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  }
  
  const start = Math.max(0, index - Math.floor((maxLength - searchTerm.length) / 2));
  const end = Math.min(text.length, start + maxLength);
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return highlightSearchTerm(snippet, searchTerm);
};
