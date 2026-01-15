/**
 * Alpha Inc. Website Logic
 * - Scroll Reveal Animation
 */

document.addEventListener('DOMContentLoaded', () => {
    // Revealクラスを持つ要素をすべて取得
    const reveals = document.querySelectorAll('.reveal');

    /**
     * スクロール時に要素が画面内に入ったら 'active' クラスを付与する関数
     */
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // 要素が下から100px見えたら発火

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // スクロールイベントにリスナーを登録
    window.addEventListener('scroll', revealOnScroll);
    
    // ページ読み込み時にも一度実行（ファーストビューで表示されるべき要素のため）
    setTimeout(revealOnScroll, 100); 
});