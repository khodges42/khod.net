              (                                     defparameter
             *me* '(:name k                        :home
            "the web" :mood                        "curious" :likes
           (lisp art systems                      tools))) (defun
          hello (n) (if (zerop n) "hi" (concatenate 'string "hello " (
         hello (1- n))))) (defun intro () (list :hello "I am K" :site
        "welcome to my site" :note "I make strange tools" :loop (hello 3
       ))) (defun say (x) (format t "~a~%" x) x) (defun walk (xs) (if (
      endp xs) (intro) (progn (say (first xs)) (walk (rest xs))))) (defun
      page () (walk '("hello" "I am K" "welcome" "look around"
     "stay awhile")) (intro)) (defun again (n) (if (zerop n) (page) (progn
     (say "still here") (again (1- n))))) (defun main () (say
      "hello I am K") (say "welcome to my site") (say
      "I like code that looks back") (again 5)) (main) (defparameter *me*
       '(:name k :home "the web" :mood "curious" :likes (lisp art systems
        tools))) (defun hello (n) (if (zerop n) "hi" (concatenate '
          string "hello " (hello (1- n))))) (defun intro () (list
            :hello "I am K" :site "welcome to my site" :note
              "I make strange tools" :loop (hello 3))) (defun say
                (x) (format t "~a~%" x) x) (defun walk (xs) (if
                  (endp xs) (intro) (progn (say (first xs)) (
                    walk (rest xs))))) (defun page () (walk
                       '("hello" "I am K" "welcome"
                          "look around" "stay awhile")
                             ) (intro)) (defun
