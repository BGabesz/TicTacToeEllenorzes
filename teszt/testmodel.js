const {test}=QUnit;
let tomb=[];
let tictactoe=new TTTModel(tomb);

  QUnit.module('TicTacToe ures e?', function() {
    test('Létezik e ures?', function(assert) {
        assert.ok(tictactoe.getVEllenorzes,"Létezik");
      });
      test('Fuggveny e?', function(assert) {
        assert.ok(typeof tictactoe.getVEllenorzes=="function","Függvény");
      });
        test('Ures e?', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
            ];
            let tictactoe=new TTTModel(tomb);
            assert.equal(tictactoe.getVEllenorzes(),"---|---|---|");
        });
        test('Teli e?', function(assert) {
            let tomb=[
                {ertek:"X"},
                {ertek:"O"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"O"},
                {ertek:"X"},
                {ertek:"O"},
                {ertek:"X"},
                {ertek:"O"},
            ];
            let tictactoe=new TTTModel(tomb);
            assert.equal(tictactoe.getVEllenorzes(),"XOX|XOX|OXO|");
        });
        
  });
  QUnit.module('TicTacToe fuggleges e?', function() {
    test('Létezik e a fuggleges?', function(assert) {
        assert.ok(tictactoe.getFEllenorzes,"Létezik");
      });
      test('Fuggveny e?', function(assert) {
        assert.ok(typeof tictactoe.getFEllenorzes=="function","Függvény");
      });
      test('1.oszlop', function(assert) {
        let tomb=[
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
        ];
        let tictactoe=new TTTModel(tomb);
        assert.equal(tictactoe.getFEllenorzes(),"X--|X--|X--|");
    });
    test('2.oszlop', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
        ];
        let tictactoe=new TTTModel(tomb);
        assert.equal(tictactoe.getFEllenorzes(),"-X-|-X-|-X-|");
    });
    test('3.oszlop', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"},
        ];
        let tictactoe=new TTTModel(tomb);
        assert.equal(tictactoe.getFEllenorzes(),"--X|--X|--X|");
    });
    });

    QUnit.module('TicTacToe atlos e?', function() {
        test('Létezik e az atlos?', function(assert) {
            assert.ok(tictactoe.atloEll,"Létezik");
          });
          test('Fuggveny e?', function(assert) {
            assert.ok(typeof tictactoe.atloEll=="function","Függvény");
          });
        test('1.oszlop 1sor', function(assert) {
          let tomb=[
              {ertek:"X"},
              {ertek:"-"},
              {ertek:"-"},

              {ertek:"-"},
              {ertek:"X"},
              {ertek:"-"},

              {ertek:"-"},
              {ertek:"-"},
              {ertek:"X"},
          ];
          let tictactoe=new TTTModel(tomb);
          assert.equal(tictactoe.atloEll(),"XXX|-X-|");
      });
      test('3.oszlop 1sor', function(assert) {
          let tomb=[
              {ertek:"-"},
              {ertek:"-"},
              {ertek:"X"},

              {ertek:"-"},
              {ertek:"X"},
              {ertek:"-"},

              {ertek:"X"},
              {ertek:"-"},
              {ertek:"-"},
          ];
          console.log(tomb);
          let tictactoe=new TTTModel(tomb);
          assert.equal(tictactoe.atloEll(),"-X-|XXX|");
      });

      });

      







/*
QUnit.module('TicTacToe atlos e?', function() {
    test('Létezik e?', function(assert) {
        assert.ok(tictactoe,"Létezik");
      });
      test('Balrol', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
        ];
    });
QUnit.module('TicTacToe ellenorzes', function() {
    test('Létezik e?', function(assert) {
        assert.ok(tictactoe,"Létezik");
      });
    });*/